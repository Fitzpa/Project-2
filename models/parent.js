module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define("Parent", {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false }
  });

  Parent.associate = function(models) {
    // Associating Parent with Posts
    // When an Parent is deleted, also delete any associated Posts
    Parent.hasMany(models.Player, {
      onDelete: "cascade"
    });
  };

  return Parent;
};
