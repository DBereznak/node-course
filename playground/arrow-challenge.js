const tasks = {
    tasks: [{
            text: "Grocery Shopping",
            completed: true
        },
        {
            text: "Clean Yard",
            completed: false
        },
        {
            text: "Film Course",
            completed: false
        },
    ],



    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
        //     const incompletedTasks = [];
        //    this.tasks.forEach((task) => {
        //        if(task.completed === false){
        //          incompletedTasks.push(task);
        //        }
        //    })
        //    return incompletedTasks;
    }
}

console.log(tasks.getTasksToDo())