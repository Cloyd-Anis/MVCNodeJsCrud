const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const accountRoutes = require("./routes/accountRoutes");
const taskRoutes = require("./routes/taskRoutes");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine','ejs');
//routes

app.use("/accounts", accountRoutes);
app.use("/tasks",taskRoutes);
app.listen(3000);


