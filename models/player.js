module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    teamName: { type: DataTypes.STRING, allowNull: false },
    jerseyNumber: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });

  Player.associate = function(models) {
    // We're saying that a Player should belong to an Parent
    // A Player can't be created without an Parent due to the foreign key constraint
    Player.belongsTo(models.Parent, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Player.associate = function(models) {
    // We're saying that a Player should belong to an Coach
    // A Player can't be created without an Coach due to the foreign key constraint
    Player.belongsTo(models.Coach, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Player;
};
