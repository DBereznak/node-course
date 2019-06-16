const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const jwt = require('jsonwebtoken');
require('./db/mongoose')

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())

//Routes
app.use(userRouter);
app.use(taskRouter);

//Server
app.listen(port, () =>{
    console.log('Server is listening on ' + port);
});

const Task = require('./models/task');


