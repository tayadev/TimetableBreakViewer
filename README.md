# Timetable Break Viewer

## Goal
Have a webapp where you can enter names and it shows you overlapping free time
It will use the tam.ch timetable api

## Current progress
I got it to work in `testing.sh` and started porting it to typescript, but it doesn't work there yet (no idea what the problem is)

## TODO
- Figure out why the ts version doesn't work
- Caching [try this](https://github.com/RasCarlito/axios-cache-adapter)
- code api
- code website


## Strucutre

- api in nodejs ot interact with the tam api
- website to interact with the api

## Knowledge

- The tam api is really annoying and weird
- You need to include a `User-Agent` header for your requests to work
- You need to include the `X-Requested-With: XMLHttpRequest` header
- If your request fails for some reason the api will most of the time just return the intranet login site (status code 200)

## Setup
- Enter your tam account data into `.env` (make a copy of `example.env` and adjust it)
- run the testing script with `$ ./testing.sh` (you may need to make it executable with `$ chmod +x testing.sh`)
- install the node.js packages with `$ npm install`
- run it with `$ npm start`