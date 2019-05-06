const fs = require('fs');
const chalk = require("chalk");


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            "title": title,
            "body": body
        });
        saveNotes(notes);
        console.log("Added a new note")
    } else {
        console.log("There is already a entry with the title " + title);
    }


}


//Save notes
const saveNotes = (notes) => {
    const savedData = JSON.stringify(notes);
    fs.writeFileSync('./notebook.json', savedData);
};



//list Notes
const listNotes = function () {
    let i = 1
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(`
${chalk.yellow('NOTE: ',  i++)}
${chalk.whiteBright('Title:')} ${chalk.blueBright(note.title)}`)
    })
}

//read Notes
const readNote = (title) => {
    const notes = loadNotes();
    let note = notes.find((note) => note.title === title);
    if (note) {
        console.log(`
                ${chalk.whiteBright('Title:')} ${chalk.blueBright(note.title)} 
                ${chalk.whiteBright('Body:')} ${chalk.blueBright(note.body)} `)
    } else {
        console.error(chalk.red("That title does not exist"))
    }

}


//delete note
const deleteNote = (title) => {
    const notes = loadNotes();

    const filterNotes = notes.filter((list) => list.title !== title);

    const deletedNote = notes.filter((list) => list.title === title);

    if (filterNotes.length > 0 && deletedNote.length === 1) {
        console.log(chalk.green.inverse("That title was sucessfully deleted"));
        saveNotes(filterNotes);
    } else {
        console.log(chalk.red.inverse("That title was not found"));
    }
}

//load notes
const loadNotes = () => {
    try {
        const data = fs.readFileSync('notebook.json');
        const dataJson = data.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return []
    }
};



module.exports = {
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    readNote: readNote
}