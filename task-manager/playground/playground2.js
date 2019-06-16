require('../src/db/mongoose');
const Task = require('../src/models/task');


// Task.findByIdAndDelete('5cf87e2da01a52737ceb842f').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false});
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });
//5cf877d82aa7ca7adcd86476
const deleteTaskAndCount = async (id) =>{
 await Task.findByIdAndDelete(id);
 const uncompleted = await Task.countDocuments({completed: false});
 return uncompleted;
}

deleteTaskAndCount('5cf877d82aa7ca7adcd86476').then((uncompleted) => {
    console.log(uncompleted);
}).catch((error) => {
    console.log(error);
})