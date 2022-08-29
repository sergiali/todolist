const fs = require('fs');
 const path = require('path');

 const {v4:uuidv4} = require('uuid');

 const rootDir = require('./path');

 const filepath = path.join(rootDir,"data","todos.json");

 exports.getTodos = (callback) => {
    fs.readFile(filepath,(err,fileContent) =>{
        if (err) return callback([]);
        callback(JSON.parse(fileContent));
    });
 };

 exports.saveTodos = (todos,callback) => {
    fs.writeFile(filepath,JSON.stringify(todos), (err) => {
        callback(err);
    });
 };

 exports.generateRandomId = () => {
    return uuidv4();
 };

 exports.getCompletedTodos = (callback) => {
   this.getTodos((todos) => {
      const filteredTodos = todos.filter((t) => t.completed === true);
      callback(filteredTodos.length);
   });
 };

 exports.getReminingTodos = (callback) => {
   this.getTodos((todos) => {
      const filteredTodos = todos.filter((t) => t.completed !== true);
      callback(filteredTodos.length);
   });
};