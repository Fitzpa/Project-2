module.exports = function(sequelize, DataTypes) {
  var Coach = sequelize.define("Coach", {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    teamName: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, validate: { notNull: true, notEmpty: true, len: [6, 140] }}
  });

  Coach.associate = function(models) {
    // Associating Coach with Player
    // When an Coach is deleted, also delete any associated Player
    Coach.hasMany(models.Player, {
      onDelete: "cascade"
    });
  };

  Coach.associate = function(models) {
    // Associating Coach with Parent
    // When an Coach is deleted, also delete any associated Parent
    Coach.hasMany(models.Parent, {
      onDelete: "cascade"
    });
  };
  return Coach;
};
