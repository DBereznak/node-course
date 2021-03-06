const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();

//Tasks

//Create a new Task
router.post('/tasks', auth, async(req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try{
        await task.save();
        res.status(201).send(task);
    }catch(error){
        res.status(400).send(error.message);
    }
})

//Get All Tasks
router.get('/tasks', auth ,async(req, res) => {
    const match = {};
    const sort = {}
    //query completed = true/false
    if(req.query.completed){
        match.completed = req.query.completed === 'true';
    }
    if(req.query.sortBy){
        const parts = req.query.sortBy.split(':');
        sort[parts[0]] = parts[1] === 'desc'? -1: 1;
    }
    try{
    await req.user.populate({
        path: 'tasks',
        match,
        options: {
            //limit the returned tasks
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip),
            //sort tasks
            sort
        }
    }).execPopulate();
    res.send(req.user.tasks);
    }catch(error){
        res.status(500).send();
    }
   
})

//Get One Task
router.get('/tasks/:id', auth, async(req, res) => {
    const _id = req.params.id;

    try{
        const task = await Task.findOne({_id, owner: req.user._id});
        if(!task){
            return res.status(404).send();
        }
        res.send(task);
    }catch(error){
        res.status(500).send();
    }
})

//Update Task

router.patch('/tasks/:id', auth, async(req, res) =>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['discription', 'completed'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation){
        return res.status(400).send({error: 'invalid update!'});
    }

    try{

        const  task = await Task.findOne({_id: req.params.id, owner: req.user._id});
        if(!task){
            return res.status(404).send();
        }
        updates.forEach((update) => task[update] = req.body[update]);
        await task.save()
        res.send(task);
    }catch(error){
        res.status(400).send();
    }
});

//Delete Task

router.delete('/tasks/:id', auth ,async(req, res) => {

    try{
        const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id});

        if(!task){
            res.status(404),seznd();
        }

        res.send(task)
    }catch(error){
        res.status(400).send()
    }
})

module.exports = router;
