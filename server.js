const path = require('path');

const express = require('express');
const bodyparser = require('body-parser');

const app = express();
//Custom Middlewares
app.use(bodyparser.urlencoded({extended:false}));
//End Of Middlewares

//Statics 

//End Of Statics


//Routes

//End Of Routes

app.listen(3000,() => {
    console.log(`sever is running !`);
});