module.exports = function(sequelize, DataTypes) {
  var Coach = sequelize.define("Coach", {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    teamName: { type: DataTypes.STRING, allowNull: false }
  });
  return Coach;
};
