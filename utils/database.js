const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/todo_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("connect to db!")).catch((err) => console.log(err));
//?Connection , Schema && Model , Instance , Mongoose Methods


// const {Sequelize} = require('sequelize');
// const sequelize = new Sequelize("todo_db","root","alibabaei4",{
//     dialect : "mysql",
//     host: "localhost",
// });

// module.exports = sequelize;