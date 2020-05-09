'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.addColumn(
      'GroupMembers', // name of Source model
      'UserId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
      }
    ).then(() => {
      return queryInterface.addColumn(
        'Semesters', // name of Source model
        'UserId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL',
        }
      );
    }).then(() => {

      return queryInterface.addColumn(
        'Courses', // name of Source model
        'SemesterId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Semesters', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL',
        }
      );
    }).then(() => {
      return queryInterface.addColumn(
        'Messages', // name of Source model
        'GroupMemberId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'GroupMembers', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL',
        }
      );
    }).then(() => {
      return queryInterface.addColumn(
        'Contents', // name of Source model
        'CourseId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Courses', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL',
        }
      );
    });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.removeColumn(
      'GroupMembers', // name of Source model
      'UserId', // name of the key we're adding
    ).then(() => {
      return queryInterface.removeColumn(
        'Semesters', // name of Source model
        'UserId', // name of the key we're adding
      )
    }).then(() => {
      return queryInterface.removeColumn(
        'Courses', // name of Source model
        'SemesterId', // name of the key we're adding
      )
    }).then(() => {
      return queryInterface.removeColumn(
        'Messages', // name of Source model
        'GroupMemberId', // name of the key we're adding
      )
    }).then(() => {
      return queryInterface.removeColumn(
        'Contents', // name of Source model
        'CourseId', // name of the key we're adding
      )
    });
  }
};
