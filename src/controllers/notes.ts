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