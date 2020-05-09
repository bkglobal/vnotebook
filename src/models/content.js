'use strict';
import { Course } from './course';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    reference: DataTypes.STRING,
    description: DataTypes.STRING,
    CourseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Course, // 'Movies' would also work
        key: 'id'
      }
    },
  }, {});
  Content.associate = function (models) {
    // associations can be defined here
  };
  return Content;
};