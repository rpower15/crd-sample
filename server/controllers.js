const mongoose = require('mongoose');
const Journal = require('./model.js');

const controllers = {};

controllers.add = async (req,res,next)=>{
    const newPost = req.body;
    console.log(req.body);
    try {
        await Journal.create(newPost);
        console.log('success');
        next();
    } catch (err){
        next(err);
    }
};

controllers.getAll = async (req,res,next)=>{
    try {
        const allData = await Journal.find({});
        res.locals.journalList = allData;
        next();
    } catch (err){
        next(err);
    }
}

controllers.update = async (req,res,next)=>{
    const target = req.params.id;
    const update = req.body;
    try {
        await Journal.findOneAndUpdate({_id: target},update);
        next();
    } catch(err) {
        next(err);
    }
};

controllers.delete = async (req,res,next)=>{
    const target = req.params.id;
    try {
        await Journal.findOneAndDelete({_id: target});
        next();
    } catch(err) {
        next(err);
    }
}



module.exports = controllers;