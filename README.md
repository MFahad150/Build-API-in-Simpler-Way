# Build-API-in-Simpler-Way
This API is build on NODE JS.

# Download Node.js

We need to set up a **Node.js** server. For this purpose, download and install it if you haven't already.
you can download it from its's official website,   [Node.js](https://nodejs.org/en/download/).

If you don't know what is **Node.js** here is short description,
> **Node JS** or **Node** is an Open Source and Cross Platform runtime environmennt for executing JavaScript code.

Supplemental reading on [NODE-JS](https://en.wikipedia.org/wiki/Node.js)



# Setup Project

1. Create a directory of any name.
2. Open it in your preferred code editor.
3. Run the following commands in the project terminal to create package.JSON file:
```bash
npm init -yes
```
**OR**
```bash
npm init -t
```



# Adding Script

Please update the scripts inside **package.JSON** file with the following:

```js
"script": {
"start": "node index.js"
}
```


# Install Express Package

Run the following command in your project terminal to install **Express** in the project.
```bash
npm install express
```
**OR**
```bash
npm i express
```



# Creating a Route

Create an index.js file. Here we will write a book route

Please use the **index.js** file, I'm providing for you in this repository.



# Code Explanation

1. First, we have imported Express into our file.
2. We created an Express app by calling **express()**.
3. We created a route **/book** and attached a function to it. When the user makes a **GET** request to the route, the function will execute.
4. Lastly, we run the Express app on a **Port**. in this case, it is 5005.



# Run the API

Run the following command in your project terminal to run the app.
``` bash
npm start
```

# Test the API

You can use RapidAPI Client, a VS Code Extension to make a **GET** request to the API at endpoint: **localhost:5005/book**
