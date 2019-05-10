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
    var coach = req.body;
    db.Coach.create({
      firstName: coach.firstName,
      lastName: coach.lastName,
      email: coach.email,
      teamName: coach.teamName
    });
  });

  // Delete an example by id
  app.delete("/api/coaches/:id", function(req, res) {
    db.Coach.destroy({ where: { id: req.params.id } }).then(function(dbCoach) {
      res.json(dbCoach);
    });
  });
};
