const account = require("../models/account");
const bcrypt = require("bcrypt");
const e = require("express");
exports.createAccount = async(req, res) =>{
    req.body.code = generateCode();
    req.body.password = await bcrypt.hash(req.body.password,12);
    let data = await account.model.create(
        req.body
    )
    res.render("login");
    //console.log(data);
}
exports.loginAccount = async(req, res)=>{
    req.body.password = await bcrypt.hash(req.body.password,12);
    let data = await account.model.findAll({
        where: {
            username: req.body.username
        }
    });
  
    res.render("index",{name:data});
}

exports.readAccount = async(req, res) =>{
    let data = await account.model.findByPk(
        req.body.id,
        {raw: true}
    )
    console.log(data);
}
exports.updateAccount = async(req, res) =>{
    let data = await account.model.update(
        {password:"P@ssw0rd"},
        {
            where:{
                id:req.body.id
            }
        }
    )
    console.log(data);
}
exports.deleteAccount = async(req, res)=>{

    let data = await account.model.destroy({
        where:{
            id: req.body.id
        }
    })
    res.send({value:data});
}

generateCode = () => {
    let generate = "";
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 32;
    for ( var i = 0; i < length; i++ ) {
        generate += char.charAt(Math.floor(Math.random() * char.length));
    }
    return generate;
}