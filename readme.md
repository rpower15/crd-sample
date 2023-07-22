# Barebones CRD

## Setup

### Environment
* npm init -y // creates packages.json
* npm install express mongoose nodemon // maybe all we need? fs? 
* create server and client folders
* add a 'nodemon ./server/server.js' command to package.json

### Client placeholder
* create index.html and index.js in client folder
* Add something to test with to both

### Server.js placeholder
* Import express and create an instance with app=express()
* Add static file serving, json parsing, and initialize app.listen on 3000
* Visit localhost:3000 and see your page



## Filling Pieces

### Mongo
* Add database code to create mongo connection in server.js
* Add a Schema and create + export a model for your data type(s)

### Express
* Add routers for app.get, app.post, app.delete with middleware and responses when successful
* (Check server endpoints with postman)
* Import Mongo schema and set middleware to make appropriate database actions when successful
* (Check more on postman)

### Page
* Fill out page basics in index.html, hook up buttons in index.js
* Set async / await fetch actions to the appropriate endpoints with the appropriate queries


