
const fs = require('fs');
var fetchNotes = () => {
    try {
      return JSON.parse(fs.readFileSync('notes.jason'));
    } catch(err) {
       return [];
    }
}
var addingNote = (title, body) => {
    var notes = fetchNotes();
    
    
    var note = {
        title, 
        body
    };
    
    var double = notes.filter((note) => note.title === title);
    
    if(double.length === 0){
        notes.push(note); 
        fs.writeFileSync("notes.jason", JSON.stringify(notes)); 
        logNote(note);
    }else{
        console.log("STOP: Title already exists");
    }
    
}

var removeNote = (title, body) => {
    var notes = fetchNotes();

   var filteredNotes = notes.filter((note) => note.title != title);
   fs.writeFileSync("notes.jason", JSON.stringify(filteredNotes));

}

var readNote = (title) => {
    var notes = fetchNotes();
    
    var filteredNotes = notes.filter((note) => note.title === title);

    logNote(filteredNotes[0]);
}
var getAll = () => {
    var notes = fetchNotes();

    notes.forEach((note) => logNote(note));
}

var logNote = (note) => {
    console.log("*******************************");
    console.log("Tilte:");
    console.log (note.title);
    console.log("Body:")
    console.log(note.body);
}
module.exports = {
    addingNote,
    removeNote,
    readNote,
    getAll
};