# Incedo-BackendChallenge

Node.js REST API Searches for an artist by name using [artist.search](https://www.last.fm/api/show/artist.search), writes the result to a user-supplied CSV filename

## Routes and Functionality

For using this REST api I provided the following routes and their functionality;

| Route                                   | Use                                                                        | Function                                                            |
| --------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| /search/artist/:artistName              | replace (:artistName) with desiered aritst                                 | gets a list of artists from the LastFM API                          |
| /search/artist/:artistName/:csvFileName | replace (:artistName,:csvFileName ) with desiered aritst and CSV file name | Gets the artist Info and writes in in a CSV file in the data folder |

## Running the API

For using this REST API do the following;

- Install the npm packages

```
npm install
```

- Provide your API_KEY in the .env file

```
API_KEY = /insert key here/
```

- Start the app

```
npm run start
```

## TechStack

<img src="https://img.shields.io/badge/node.js-87bf01?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-f5f5f5?style=for-the-badge&logo=express&logoColor=black">
