# BEANstack

Bootstrap Express Angular 1.5 Node Example.

A fizzbuzz is some kind of mythical hero that subsists on API calls(?)

## Tech Stack

```
Node 7.6.0
Express
Angular 1.5.7
Angular Router
jQuery
Boostrap 4 Alpha - Yikes!
Awesome .gif's
```

A rare example on here with an interface/GUI.

## Input

URI: /api
Method: GET
Required arguments:

* *word*: One of "fizz", "buzz" or "fizzbuzz".

* *max_value*: An integer greater than 0.

Example input:
    /api?word=fizz&max_value=30

## Output

Format: JSON.
HTTP status: 400 if *status* is "error", otherwise 200.
Key/values:

* *numbers*: An array of all integers between and including 1 and *max_value*
that are divisible by 3 if *word* is "fizz", 5 if *word* is "buzz" and by both
3 and 5 if *word* is "fizzbuzz". The array should be in ascending order. If
*status* is "error", this should be an empty array.

* *status*. "error" if a required argument is missing or invalid, otherwise
"ok".

Example output matching example input:
    {"status": "ok", "numbers": [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]}

## Fizzbuzz
Look, no one really knows what a fizzbuzz is for sure. But, if you'd like to find out follow these instructions:

```
Open up the source code either by downloading or cloning.
npm install
node server.js
```

This implementation should be platform independent. Mac, Windows, or Linux - friendly!
You can then see the API in action by going to:

```
localhost:8989
localhost:8989/api?max_value=...&word=...
```

Thanks for braving the fizzbuzz!

## Licensing and Versioning

MIT Licensed!