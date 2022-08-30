const Todo = require('../model/todo');

exports.addTodo = async (req,res) => {
    if(!req.body.todo) return res.redirect("/");
    try {
        await Todo.create({text : req.body.todo});
        res.redirect("/");
    } catch (err) {
        console.log(err);
    };
};

exports.deleteTodo = async (req,res) => {
    try {
        await Todo.destroy({where : { id : req.params.id }});
        res.redirect("/");
    } catch (err) {
        console.log(err);
    };
};

exports.completedTodo = async (req,res) => {
    try {
        const todo = await Todo.findByPk(req.params.id);
        todo.completed = true;
        await todo.save();
        res.redirect("/");
    } catch (err) {
        console.log(err);
    };
};