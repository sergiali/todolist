const {Sequelize} = require('sequelize');
const sequelize = new Sequelize("todo_db","root","alibabaei4",{
    dialect : "mysql",
    host: "localhost",
});

module.exports = sequelize;