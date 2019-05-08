var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/coaches", function(req, res) {
    db.Coach.findAll({}).then(function(dbCoach) {
      res.json(dbCoach);
    });
  });

  // Create a new example
  app.post("/api/coaches", function(req, res) {
    db.Coach.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      teamName: req.body.teamName
    })
      .then(function(dbCoach) {
        // We have access to the new coach as an argument inside of the callback function
        res.json(dbCoach);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // Delete an example by id
  app.delete("/api/coaches/:id", function(req, res) {
    db.Coach.destroy({ where: { id: req.params.id } }).then(function(dbCoach) {
      res.json(dbCoach);
    });
  });
};
