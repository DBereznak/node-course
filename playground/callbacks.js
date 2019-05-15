// const names = ['Donny', 'Kahlan', 'Angela', 'jo', 'bob'];

// const shortnames = names.filter((name) => {
//     return name.length < 5;
// });

// console.log(shortnames);


function add(x, y, callback){
let sum = y + x;
 callback(sum);
};


add(1, 4, (sum) => {
    console.log(sum);
})