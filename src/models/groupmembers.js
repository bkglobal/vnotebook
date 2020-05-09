'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupMembers = sequelize.define('GroupMembers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {});
  GroupMembers.associate = function (models) {
    // associations can be defined here
    GroupMembers.hasMany(models.Messages);
  };
  return GroupMembers;
};