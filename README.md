# Incedo-BackendChallenge

Node.js REST API Searches for an artist by name using [artist.search](https://www.last.fm/api/show/artist.search), writes the result to a user-supplied CSV filename

## Routes and Functionality

For using this REST API I provided the following routes and their functionality;

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

While it's not strictly necessary to use the MVC pattern since it's a simple app it can provide some benefits such as better code organization, and increased maintainability. I followed a more simple guideline by separating code into distinct controllers routes and utils, it can be easier to understand and modify different parts of the application without affecting other parts.

<img src="https://img.shields.io/badge/express-f5f5f5?style=for-the-badge&logo=express&logoColor=black">

I used ExpressJs as a web framework for NodeJs because it provides a simple a consistent API for handling HTTP requests and responses which makes the code more maintainable

Although it's common to be using a POST requests in this REST API application,(since the challenge pdf was not specific about it) but I prefered using query params query parameters instead of request body to pass the artist's name and CSV file name to the API endpoint since it can be easily added to the URL, which makes it easier for testing and debug

I would have also added some testing, but since the challenge did not mention the use of it, I prefered to keep it simple.