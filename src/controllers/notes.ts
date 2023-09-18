import { RequestHandler } from "express";
import NoteModel from "../models/note";

export const getNotes: RequestHandler = async (req, res , next) => {
    try {
 const notes = await NoteModel.find().exec();
 res.status(200).json(notes);}
 catch (error) {next(error);}
 next();
}
;
export const getNotesById: RequestHandler = async (req, res , next) => {
    const noteId = req.params.noteId;
    try {
 const notes = await NoteModel.findById(noteId).exec();
 res.status(200).json(notes);}
 catch (error) {next(error);}
 next();
}

export const deleteNote : RequestHandler = async (req , res , next) => {
    const noteId = req.params.noteId
    try {
        const deleteNote1 = await NoteModel.findByIdAndDelete(noteId).exec();
        res.status(200).json(deleteNote1);}
        catch (error) {next(error);}
        next();
       
    }
    


export const createNote: RequestHandler = async (req, res, next) => {
    const titel = req.body.titel;
    const text = req.body.text;
    try {
        const newNote = await NoteModel.create({
            titel: titel ,
             text : text ,
            });
    }
    catch {
        res.status(400).json({message: "Bad request"});
    }}

interface updateNoteParams {
    noteId : string
}
interface updateNoteBody {
    titel? : string
    text? : string
}


export const updateNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId
    const newTitel = req.body.titel;
    const newText = req.body.text;
    try {
        const updatedNote = await NoteModel.findByIdAndUpdate(noteId, {
            titel: newTitel,
            text: newText
        }, {new: true});
        res.status(200).json(updatedNote);
            
    }

    catch {
        res.status(400).json({message: "Bad request"});
    }}







