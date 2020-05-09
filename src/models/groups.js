'use strict';
module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define('Group', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING
  }, {});
  Groups.associate = function (models) {
    // associations can be defined here
    Groups.hasMany(models.GroupMembers);
  };
  return Groups;
};