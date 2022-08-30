const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        max: 255,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const Todo = mongoose.model("Todo",todoSchema);

module.exports = Todo;




// const {DataTypes} = require('sequelize');
// const sequelize = require('../utils/database');

// const Todo = sequelize.define("Todo", {
//     //? Model Attributes
//     id: {
//         type : DataTypes.INTEGER,
//         autoIncrement : true,
//         primaryKey : true,
//         allowNull : false,
//     },
//     text : {
//         type : DataTypes.STRING,
//         allowNull : false,
//     },
//     completed : {
//         type : DataTypes.BOOLEAN,
//         defaultValue : false,
//         allowNull : true,  //? default is true
//     }
// })

// module.exports=Todo;