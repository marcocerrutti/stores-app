const Sequelize = require('sequelize');

const sequelize = new Sequelize('stores_complete', 'root', 'Peacemaker7#', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;