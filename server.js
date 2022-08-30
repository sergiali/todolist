const path = require('path');

const express = require('express');
const bodyparser = require('body-parser');

const {setStatics} = require('./utils/statics');
const sequelize = require('./utils/database');
const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");
const errorController = require('./controllers/error');

const app = express();
//Custom Middlewares
app.use(bodyparser.urlencoded({extended:false}));
//End Of Middlewares

//Ejs
app.set("view engine", "ejs");
app.set("views","views");
//End Of Ejs

//Statics 
setStatics(app);
//End Of Statics


//Routes
app.use(indexRoutes);
app.use("/admin",adminRoutes);
//End Of Routes

//404
app.use(errorController.get404);


sequelize
.sync()
.then((result) => {
    console.log(result);
    app.listen(3000,() => console.log(`sever is running !`));
})
.catch((err) => console.log(err));