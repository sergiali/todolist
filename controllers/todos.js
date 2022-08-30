const Todo = require('../model/todo');

exports.getIndex = async (req,res) => {
    const completedTodos = await Todo.count({where : {completed : true}});
    const todos = await Todo.findAll();
    res.render("index",{
                pageTitle : "کارهای روزمره", 
                todos,
                completedTodos,
                reminingTodos: todos.length - completedTodos,
    });
};