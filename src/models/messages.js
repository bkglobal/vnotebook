'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: DataTypes.STRING,
    message: DataTypes.STRING,
    reference: DataTypes.STRING
  }, {});
  Messages.associate = function (models) {
    // associations can be defined here
  };
  return Messages;
};