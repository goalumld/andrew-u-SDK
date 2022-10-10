# The One API to Rule Them All (a LotR project)

This repository contains Javascript files that are ready to be implemented into any project. Each file contains functions that access different API endpoints provided by The-One-API.
*https://the-one-api.dev/*

## Installation

Use `npm` or `yarn` to install `lotr-sdk-project`

```bash
#NPM
npm install --save lotr-sdk-project

#Yarn
yarn add lotr-sdk-project
```

## Usage

```javascript
import OneApi from "lotr-sdk-project";
```

## Pagination, Sorting, and Filtering

Different queries can be performed while accessing each API endpoint:

#### Pagination

```javascript
Limit example: /character?limit=100

Page example: /character?page=2

Offset example: /character?offset=3
```

#### Sorting:

```javascript
Ascending example: /character?sort=name:asc

Descending example: /character?sort=name:desc
```

#### Filtering:

```javascript
Match, Negate Match example: /character?name=Gandalf , /character?name!=Frodo

Include, Exclude example: /character?race=Hobbit,Human , /character?race!=Orc,Goblin

Exists, Doesn't Exist example: /character?name , /character?!name

Regex example: /character?name=/foot/i , /character?name!=/foot/i

Less than, Greater than, Equal to example: /movie?budgetInMillions<100 , /movie?academyAwardWins>0 , /movie?runtimeInMinutes>=160
```

## Important Note

API Token must be inserted to gain full access to the API endpoints other than /books. You can sign up and receive a token by going to *https://the-one-api.dev/sign-up* and signing up with a valid email address. Open index.js and insert API token.
