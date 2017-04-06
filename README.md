hapi-heroku
===========

A sample app running hapi on heroku


## Getting started

Before cloning this repository and reploying to heroku install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

1. `git clone git://github.com/wpreul/hapi-heroku.git && cd hapi-heroku`
2. `heroku login`
3. `heroku create`
4. `git push heroku master`
5. `heroku ps:scale web=1`
5. `heroku open`

## Route description

Here are all the route this basic server provides

- `GET /(?username=string)` : return Success!, and accept an event
- `POST /` : echo the POST body back to you
- `GET /admin?username=string&password=string`: return Success!
- `GET /users?email=email`: return Success!
- `GET /config?choices=array`: return Success!
- `GET /test(?positiveNumber)`: return Success!
- `GET /output(?input=string)`: return {"myOutput":"$input"}
- `GET /users/{id}?name=string` : return Success!
- `POST /users/{id}` : expect a json body of {title:string,status:(open|pending|close), participants:[array of at least 2 string or number]. return succes
- `GET /redirect`: redirect to /error
- `GET /error`: return This is my error