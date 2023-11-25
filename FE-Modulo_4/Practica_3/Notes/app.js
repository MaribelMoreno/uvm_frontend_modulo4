const yargs = require("yargs");
const notes = require("./notes.js");
yargs.version("1.1.0");

//Accion agregar, eliminar y consultar notas usando Yargs

//Add note
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("title: " + argv.title);
    console.log("body: " + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

//Delete note
yargs.command({
  command: "delete",
  describe: "delete a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("deleting a note!");
    notes.removeNote(argv.title);
  },
});

//List Notes
yargs.command({
  command: "list",
  describe: "list notes",
  handler: function () {
    console.log("listing notes!");
    notes.listNotes();
  },
});

yargs.parse();
