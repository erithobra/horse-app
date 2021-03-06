'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Horses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      bname: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      div: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      disp: {
        type: Sequelize.STRING
      },
      meds: {
        type: Sequelize.STRING
      },
      lastworm: {
        type: Sequelize.DATEONLY
      },
      lastshoe: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Horses');
  }
};