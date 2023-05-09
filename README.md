# url-shortener

## Introduction

A microservice API to short those longer urls. Each URL is shorted and stored in a database to get access anytime.

## Features

Each shorted url stored has a **clicks** element wich is increased by one any time the URL is accessed. Every URL has an expired date defined in hours (zero is not allowed) with the request used to create it.

## Run it locally

1. Clone the repo and open the project with your favourite code editor
2. Change the file name **.env.git** to **.env**. Open it and add your [MongoURI](https://www.mongodb.com/docs/manual/reference/connection-string/).
3. Open the __cmd__ and run the next commands

```
npm i
npm start
```
The command **npm start** will build and run the project using concurrently (check it in *devDependencies* inside *package.json*).

The port is **PORT : http://localhost:4000**.

## Endpoints

### POST **PORT/short** 
Short a new URL. The body requires **url** and **expiresIn** elements. **expiresIn** is the hours to live.

**Body Request:**

```json
{
    "url":"https://www.alonglonglongurltoshort.com/verylong",
    "expiresIn": 5
}
``` 
**Response:**

It contains if everything wass **success**, a **message** and the data: the shorted **url** and when it **expires**.

```json
{
    "succes": true,
    "message": "Url shorted successful",
    "data": {
        "url": "http://localhost:4000/api/v1/short/Thyr7M3Bjl1JEFLng--dk",
        "expiresAt": "2023-01-29T17:45:01.206Z"
    }
}
```
### GET **PORT/short/ulr-shorted**

The GET method requires the shorted URL in the URI request. If the URL still living in the DB, the access will be redirect to the original URL.

### Bad Request or Not Found Responses

- **Bad Request** when the URL is not an URL.
- **Not Found** when the URL has expired.

## Technologies

- [NodeJS](https://nodejs.org/) 
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## License

This project has not license. You can dowload it and use it for free.

## Author

[Nap](https://www.linkedin.com/in/nahuelpairola/)

**NOTE: IF YOU FIND SOMETHING WRONG OR BROKE PLEASE LET ME KNOW :)**