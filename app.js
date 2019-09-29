const yargs = require('yargs')
const notes = require('./notes.js')

//Add Notes using add command as argument 
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder : {
        title : {
            describe : "Adding title",
            demandOption : true,
            type : String
        },
        body : {
            describe : "Adding body",
            demandOption : true,
            type : String
        }
    },
    handler(argv) {
        notes.addNote(argv.title , argv.body)
    } 
})


//Remove Note using remove command as argument
yargs.command({
    command : 'remove',
    describe: 'Remove a note',
    builder : {
        title : {
            describe : "Removing Title",
            demandOption :  true,
            type : String
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Reading a note
yargs.command({
    command : 'read',
    describe: 'Read a note',
    builder : {
        title : {
            describe : "Reading a note",
            demandOption : true,
            type : String
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

//Listing all the notes
yargs.command({
    command : 'list',
    describe: 'List all note',
    handler() {
        notes.listNotes()
    }
})

console.log(yargs.argv)