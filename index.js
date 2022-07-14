const yargs = require('yargs');
const pkg = require('./package.json');
const {addNote, printNotes, removeNote} = require('./notes.controller');

yargs.version(pkg.version);

yargs.command({
  command: 'add',
  describe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true
    }
  },
  async handler({title}) {
    addNote(title);
  }
});

yargs.command({
  command: 'list',
  describe: 'Print all notes',
  async handler() {
    printNotes();
  }
});

yargs.command({
  command: 'remove',
  describe: 'Deleted note by id',
  builder: {
    id: {
      type: 'string',
      describe: 'Note id',
      demandOption: true
    }
  },
  async handler({id}) {
    removeNote(id);
  }
});

yargs.parse();