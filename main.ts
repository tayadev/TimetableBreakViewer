import axios from 'axios'
import { Resources } from './resources'

const instance = axios.create({
    baseURL: 'https://intranet.tam.ch/krm/',
    headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0',
        'X-Requested-With': 'XMLHttpRequest'
    }
})

// Authenticates you with username and password and returns the session token
async function authenticate(username: String, password: String, hash: String): Promise<String> {

    const response = await instance({
        method: 'get',
        url: '/',
        data: {
            loginschool: 'krm',
            loginuser: username,
            loginpassword: password,
            hash: hash
        }
    })

    const sturmsessionCookie = response.headers['set-cookie'][0]
    const sturmsession = sturmsessionCookie.match(/(?<=sturmsession=)\w+/)[0];
    return sturmsession

}


// Requests the base website and extracts the csrfToken from the script tag in the html
async function getCsrfToken(sturmsession: String): Promise<String> {

    const response = await instance({
        method: 'get',
        url: '/',
        /* headers: {
            'Cookie': `sturmsession=${sturmsession}`
        } */
    })

    return response.data.match(/(?<=csrfToken\s=\s')\w+/)[0]
}

// Gets subject, classes, teachers and rooms
// FIXME: this doesn't work
async function getResources(sturmsession: String, csrfToken: String): Promise<Resources> {

    const response = await instance({
        method: 'post',
        url: '/timetable/ajax-get-resources',
        headers: {
            'Cookie': `sturmsession=${sturmsession}`
        },
        data: {
            periodId: 74, // TODO: figure out what this does
            csrfToken: csrfToken 
        }
    })

    return response.data
}

async function getMainHash(): Promise<String> {
    const response = await instance({
        method: 'get',
        url: '/',
    })
    return response.data.match(/(?<=\"hash\"\svalue=\")\w+[.]\w+/)[0];

}



// Gets the timetable
// FIXME: this doesn't work
async function getTimetable(sturmsession: String): Promise<any>{

    const response = await instance({
        method: 'post',
        url: '/timetable/ajax-get-timetable',
        headers: {
            'Cookie': `sturmsession=${sturmsession}`
        },
        data: {
            startDate: 1614553200000, 
            endData: 1615071600000,
            holidaysOnly: 0,
            'studentId[]': 4012498
        }
    })

    return response.data;

}

async function test() {
    const hash = await getMainHash()
    const session = await authenticate(process.env.USERNAME, process.env.PASSWORD, hash)
    const csrfToken = await getCsrfToken(session)
    const resources = await getResources(session, csrfToken)
    console.log("csrfToken:", csrfToken)
    console.log("hash:", hash)
    console.log(resources)
}

test()
