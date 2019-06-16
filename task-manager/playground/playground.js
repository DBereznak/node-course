require('../src/db/mongoose');
const User = require('../src/models/user');

// 5cf720567ca3646ea4f45c69

// User.findByIdAndUpdate('5cf720567ca3646ea4f45c69', {
//     age: 41
// }).then((user) => {
//   console.log(user);  
//   return User.countDocuments({age: 41})
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//  console.log(error.message)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});
    return count;
}

updateAgeAndCount('5cf720567ca3646ea4f45c69', 38).then((count) =>{
    console.log(count);
}).catch((error) => {
    console.log(error);
})