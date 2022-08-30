const Todo = require('../model/todo');

exports.getIndex = async (req,res) => {
    const completedTodos = await Todo.countDocuments({completed : true});
    const todos = await Todo.find();
    res.render("index",{
                pageTitle : "کارهای روزمره", 
                todos,
                completedTodos,
                reminingTodos: todos.length - completedTodos,
    });
};