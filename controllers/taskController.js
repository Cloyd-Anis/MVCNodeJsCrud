const task = require("../models/task");
const e = require("express");
const { render } = require("ejs");
exports.createTask = async(req, res) =>{
    req.body.status="Uncompleted"
    req.body.user_code = req.params.id
    let fetch = await task.model.create(
        req.body
    )
    res.redirect("/tasks/"+req.body.user_code);

}
exports.allTasks = async(req,res)=>{
    let fetch = await task.model.findAll({
        where: {
            user_code: req.params.id
        }
    })
     res.render("task",{data:fetch});
   
}
exports.deleteTask = async(req,res)=>{
    let fetch = await task.model.destroy({
        where: {
            task_id: req.params.task_id
        }
    })

    
}