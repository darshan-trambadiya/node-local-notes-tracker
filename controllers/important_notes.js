// models
const ImportantNotesModel = require("../models/important_notes");

exports.getImportantNotesPage = async (req, res, next) => {
  try {
    const importantNotes = await ImportantNotesModel.fetchAll();
    res.render("important_notes/important_notes", {
      importantNotes: importantNotes,
      pageTitle: "All Important Notes | Local Notes Tracker",
      path: "/important-notes",
    });
  } catch (error) {
    console.error(
      "=====> Error: controllers -> important_notes.js -> getImportantNotesPage() :: ",
      error
    );
  }
};

exports.markAsImportant = async (req, res, next) => {
  try {
    const noteId = req.body.noteId;
    const updatedImportantNotes =
      await ImportantNotesModel.markOrRemoveAsImportant(noteId, true);
    res.render("important_notes/important_notes", {
      importantNotes: updatedImportantNotes,
      pageTitle: "All Important Notes | Local Notes Tracker",
      path: "/important-notes",
    });
  } catch (error) {
    console.error(
      "=====> Error: controllers -> important_notes.js -> markAsImportant() :: ",
      error
    );
  }
};

exports.removeAsImportant = async (req, res, next) => {
  try {
    const noteId = req.body.noteId;
    const updatedImportantNotes =
      await ImportantNotesModel.markOrRemoveAsImportant(noteId, false);
    res.render("important_notes/important_notes", {
      importantNotes: updatedImportantNotes,
      pageTitle: "All Important Notes | Local Notes Tracker",
      path: "/important-notes",
    });
  } catch (error) {
    console.error(
      "=====> Error: controllers -> important_notes.js -> removeAsImportant() :: ",
      error
    );
  }
};
