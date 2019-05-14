const express = require("express");
const router = express.Router();
var db = require("../models");

// module.exports = function(app) {
//   // Load index page
router.get("/login", function(req, res) {
  res.render("login");
});

router.get("/", function(req, res) {
  res.render("selection");
});

router.get("/coach", function(req, res) {
  res.render("coach");
});

router.get("/player", function(req, res) {
  res.render("player");
});

router.get("/parent", function(req, res) {
  res.render("parent");
});

router.get("/users/addSchedule", function(req, res) {
  res.render("addSchedule");
});

router.get("/dashboard", function(req, res) {
  res.render("mainDashboard");
});

router.get("/addToSchedule", function(req, res) {
  res.render("addToSchedule");
});

router.get("/users/addPlayer", function(req, res) {
  res.render("addPlayer");
});

router.get("/viewSchedule", function(req, res) {
  res.render("viewSchedule");
});

router.get("/addGame", function(req, res) {
  res.render("addGame");
});

router.get("/users/addPractice", function(req, res) {
  res.render("addPractice");
});

router.get("/viewRoster", function(req, res) {
  res.render("viewRoster");
});

// Route for the login/signup page
router.get("/", function(req, res) {
  res.render("loginsignup");
});

// Load example page and pass in an example by id
router.get("/example/:id", function(req, res) {
  db.Example.findOne({ where: { id: req.params.id } }).then(function(
    dbExample
  ) {
    res.render("example", {
      example: dbExample
    });
  });
});

// Render 404 page for any unmatched routes
router.get("*", function(req, res) {
  res.render("404");
});
// };

module.exports = router;
