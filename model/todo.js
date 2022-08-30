const {DataTypes} = require('sequelize');
const sequelize = require('../utils/database');

const Todo = sequelize.define("Todo", {
    //? Model Attributes
    id: {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false,
    },
    text : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    completed : {
        type : DataTypes.BOOLEAN,
        defaultValue : false,
        allowNull : true,  //? default is true
    }
})






// const todoUtils = require('../utils/todos');
// class Todo {
//     constructor(id,text,completed=false){
//         this.id=id;
//         this.text=text;
//         this.completed=completed;
//     };

//     save(callback){
//         todoUtils.getTodos((todos) => {
//             todos.push(this);
//             todoUtils.saveTodos(todos,(err) => {
//                 callback(err);
//             });
//         });
//     };

//     static fetchAll(callback){
//         todoUtils.getTodos((todos) => {
//             callback(todos);
//         });
//    };

//    static deleteTodo(id,callback){
//     todoUtils.getTodos((todos) => {
//         const filteredTodos = todos.filter((t) => t.id != id );
//         todoUtils.saveTodos(filteredTodos, (err) => {
//             callback(err);
//         });
//     });
//    };

//    static setCompleteTodo(id,callback){
//     todoUtils.getTodos((todos) => {
//         const todoIndex = todos.findIndex((t) => t.id == id);
//         const todo = todos[todoIndex];
//         todo.completed = true;
//         todos[todoIndex] = todo;
//         todoUtils.saveTodos(todos,(err) => {
//             callback(err);
//         });
//     });
//   };
// };

module.exports=Todo;