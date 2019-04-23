//core Packages
const fs = require('fs');
const notes = require('./notes');

//node Packages
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


//Commands
yargs.command('add', 'Add a new note', 
    {title: {describe: 'Note Title', demandOption: true, type: 'string'},
     body: {describe: 'Note Body', demandOption: true, type: 'string'}}, 
    (argv)=> {notes.addNote(argv.title, argv.body)});

yargs.command('remove', 'Remove a note', 
    {title: {describe: 'Note Title', demandOption: true, type: 'string'}},  
    (argv) =>{notes.deleteNote(argv.title)});

yargs.command('list', 'List all notes.', 
    ()=> {console.log('Notes Listed')})

yargs.command('read', 'Read a note', 
    {title: {describe: 'Note Title', demandOption: true, type: 'string'}}, 
    () =>{console.log('Note Read')});

yargs.parse();

//function addNote(title, body){
  //  console.log(title, body);
    // const data = fs.readFileSync('./notebook.json');
    // const dataJson = data.toString();
    // const parsedData = JSON.parse(dataJson);
    // parsedData.push({"title": title, "body":body});
    // const savedData = JSON.stringify(parsedData);
    // fs.writeFileSync('./data.json', savedData);
//}


//create Add command

// switch (command) {
//     case 'add':
//     console.log("You are adding a note?");
//     break;
//     case 'remove':
//     console.log('You want to remove a note?');
//     break;
//     default:
//     console.log("That was not a valid input");   
// }