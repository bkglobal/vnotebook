'use strict';
module.exports = (sequelize, DataTypes) => {
  const Semester = sequelize.define('Semester', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    semesterName: DataTypes.STRING
  }, {});
  Semester.associate = function (models) {
    // associations can be defined here
    Semester.hasMany(models.Course);

  };
  return Semester;
};