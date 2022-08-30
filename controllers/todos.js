const Todo = require('../model/todo');

exports.getIndex=(req,res) => {
    
    Todo.findAll().then((todos) => {
        Todo.count({ where : { completed : true }}).then((completedTodos) => {
            res.render("index",{
                pageTitle : "کارهای روزمره", 
                todos,
                completedTodos,
                reminingTodos: todos.length - completedTodos,
            });
        });
    });
};