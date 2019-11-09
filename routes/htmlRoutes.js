// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  // blog route loads blog.html
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};
  // // blog route loads blog.html
  // app.get("/recipe", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/recipe.html"));
  // });



