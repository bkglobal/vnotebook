'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    courseName: DataTypes.STRING,
    teacher: DataTypes.STRING
  }, {});
  Course.associate = function (models) {
    // associations can be defined here
    Course.hasMany(models.Content);
  };
  return Course;
};