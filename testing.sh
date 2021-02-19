#!/bin/bash

username=$(grep -Po "(?<=USERNAME=)(.*)" .env)
password=$(grep -Po "(?<=PASSWORD=)(.*)" .env)

cookies=$(curl 'https://intranet.tam.ch/krm/' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0' --data-raw "hash=602feee1219441.84804637&loginschool=krm&loginuser=$username&loginpassword=$password" -c -)

sturmsession=$(echo $cookies | grep -oP '(?<=sturmsession\s)\w+')

echo Sturmsession: $sturmsession

csrfToken=$(curl 'https://intranet.tam.ch/krm/calendar' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0' -H 'X-Requested-With: XMLHttpRequest' -H "Cookie: sturmsession=$sturmsession" | grep -Po "(?<=csrfToken=')\w+" | tail -1)

echo csrfToken: $csrfToken

# Uncomment the block below to get the resources endpoint
# curl 'https://intranet.tam.ch/krm/timetable/ajax-get-resources' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0' -H 'X-Requested-With: XMLHttpRequest' -H "Cookie: sturmsession=$sturmsession" --data-raw "periodId=74&csrfToken=$csrfToken"

# Uncomment the block below to get the timetable endpoint
# studentId=4012498
# curl 'https://intranet.tam.ch/krm/timetable/ajax-get-timetable' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0' -H 'X-Requested-With: XMLHttpRequest' -H "Cookie: sturmsession=$sturmsession" --data-raw "startDate=1614553200000&endDate=1615071600000&studentId%5B%5D=$studentId&holidaysOnly=0"