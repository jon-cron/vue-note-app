import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { logger } from "../utils/Logger.js"

class NotesService{
  create(noteData){
    const newNote = new Note(noteData)
    AppState.notes.push(newNote)
    logger.log(AppState.notes)

  }
}

export const notesService = new NotesService()