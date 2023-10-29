const TaskModel = require('../models/TaskModels');

module.exports.getTasks = async(req, res) => {
    const tasks = await TaskModel.find();
    res.send(tasks);
};

module.exports.saveTask = async(req, res) => {
   const {task} = req.body;

   TaskModel.create({task})
   .then((data) =>{
    console.log('Task saved!');
    res.status(201).send(data);
   })
   .catch((err) =>{
    console.log(err);
    res.send({error: err, msg: "Couldn't save task."});
   });
};

module.exports.updateTask = async(req, res) => {
    const {id} = req.params;
    const {task} = req.body;
 
    TaskModel.findByIdAndUpdate(id, {task})
        .then(() => res.send('Task updated!'))
        .catch((err) =>{
            console.log(err);
            res.send({error: err, msg: "Couldn't update task."});
        });
};

module.exports.deleteTask = (req, res) => {
    const {id} = req.params;
 
    TaskModel.findByIdAndDelete(id)
    .then(() => res.send('Task deleted!'))
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Couldn't delete task."});
    });
};