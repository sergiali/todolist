const Todo = require('../model/todo');
const todoUtils = require('../utils/todos');

exports.getIndex=(req,res) => {
    todoUtils.getCompletedTodos((completedTodos) => {
        todoUtils.getReminingTodos((reminingTodos) => {

            Todo.fetchAll((todos) => {
                res.render("index",{
                    pageTitle : "کارهای روزمره", 
                    todos,
                    completedTodos,
                    reminingTodos,
            });
            });

        });

    });
};