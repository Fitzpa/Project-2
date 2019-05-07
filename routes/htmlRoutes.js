var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/coach", function(req, res) {
    res.render("coach");
  });

  app.get("/addSchedule", function(req, res) {
    res.render("addSchedule");
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
