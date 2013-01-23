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
