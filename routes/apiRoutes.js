// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var axios = require("axios");


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  // app.get("/api/posts/", function(req, res) {
  //   db.Post.findAll({})
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  app.get("/api/posts/random", function(req, res) {
    // console.log(req.body);
    axios.get('https://api.spoonacular.com/recipes/random?&apiKey=d1c503b2daca47d48c8b558b879203e0')
    .then(function (response) {
      // handle success
      console.log("test", response);
      res.json(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  });

  app.get("/api/posts/search", function(req, res) {
    // console.log(req.body);
    axios.get('https://api.spoonacular.com/recipes/search?&apiKey=d1c503b2daca47d48c8b558b879203e0')
    .then(function (response) {
      // handle success
      console.log("test", response);
      res.json(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};