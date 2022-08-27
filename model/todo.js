const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const filepath =path.join(rootDir,"data","todos.json");

class Todo {
    constructor(id,text,completed=false){
        this.id=id;
        this.text=text;
        this.completed=completed;
    };

    save(callback){
        fs.readFile(filepath,(err,fileContent) => {
           // if(err) return [];
            const todos = JSON.parse(fileContent);
            todos.push(this);

            fs.writeFile(filepath,JSON.stringify(todos),(err) => {
                if(err) callback(err);
               else return callback([]);
            });
        });
    };

    static fetchAll(callback){
        fs.readFile(filepath,(err,fileContent) => {
            if(err) return [];
            const todos = JSON.parse(fileContent);
            callback(todos);
        });
   };

   static deleteTodo(id,callback){
    fs.readFile(filepath,(err,fileContent) => {
        const todos = JSON.parse(fileContent);
        const filteredTodos = todos.filter((t) => t.id != id);
        fs.writeFile(filepath,JSON.stringify(filteredTodos),(err) => {
            callback(err);
        });   
    });
   };

   static setCompleteTodo(id,callback){
    fs.readFile(filepath,(err,fileContent) => {
        const todos = JSON.parse(fileContent);
        const todoIndex = todos.findIndex((t) => t.id=id);

        const todo = todos[todoIndex];
        todo.completed = true;
        todos[todoIndex] = todo;

        fs.writeFile(filepath,JSON.stringify(todos),(err) => {
            callback(err);
        });
    });
   };
};

module.exports=Todo;