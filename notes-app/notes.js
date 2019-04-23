const fs = require('fs');
const chalk = require("chalk");


const addNote = function(title, body){
    const notes = loadNotes();
    const check = checkNotes(notes, title);

    if(!check){
    notes.push({
        "title": title, 
        "body":body}
        );
        saveNotes(notes);
        console.log("Added a new note")
    }else {
        console.log("There is already a entry with the title " + title);
    }


}

//CheckNotes
const checkNotes = function(notes, title){
let check = false;
for(let i = 0; i < notes.length; i++){
    if(notes[i].title === title){
        check = true;
    } 
}
return check;
};

//Save notes
const saveNotes = function(notes){
    const savedData = JSON.stringify(notes);
    fs.writeFileSync('./notebook.json', savedData);
};


//load notes
const loadNotes = function() {
    try{
        const data = fs.readFileSync('notebook.json');  
        const dataJson = data.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return []
    }
};

//delete note
const deleteNote = function(title){
    const notes = loadNotes();
    const filterNotes = notes.filter((list) =>{ 
         return list.title !== title;
    });
    
console.log(filterNotes)
    if(filterNotes.length > 0){
        console.log(chalk.green("That title was sucessfully deleted"));
        saveNotes(filterNotes);
    }
}


module.exports = {
    addNote: addNote,
    deleteNote: deleteNote
}