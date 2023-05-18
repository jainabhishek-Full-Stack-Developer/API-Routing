const exppress = require("express");
const app = exppress();

app.get("/", (request, response) => {
  response.send("Home Page");
});

app.get("/about", (request, response) => {
  response.sendFile("./about.html", { root: __dirname });
});
module.exports = app;
