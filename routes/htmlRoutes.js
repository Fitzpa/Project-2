var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/selection", function(req, res) {
    res.render("selection");
  });

  app.get("/coach", function(req, res) {
    res.render("coach");
  });

  app.get("/addSchedule", function(req, res) {
    res.render("addSchedule");
  });

  app.get("/dashboard", function(req, res) {
    res.render("mainDashboard");
  });

  app.get("/addToSchedule", function(req, res) {
    res.render("addToSchedule");
  });

  app.get("/addPlayer", function(req, res) {
    res.render("addPlayer");
  });

  app.get("/viewSchedule", function(req, res) {
    res.render("viewSchedule");
  });

  app.get("/addGame", function(req, res) {
    res.render("addGame");
  });

  app.get("/addPractice", function(req, res) {
    res.render("addPractice");
  });

  app.get("/viewRoster", function(req, res) {
    res.render("viewRoster");
  });

  // Route for the login/signup page
  app.get("/", function(req, res) {
    res.render("loginsignup");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
