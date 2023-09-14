import express, { NextFunction } from 'express';
import NoteModel from './models/note';


const app = express();



app.get("/", async (req, res) => {

    try {
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
    }
    catch (error) {
        console.error(error);
    let errorMessage = 'An unknown error has occurred';
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).send(errorMessage);
        
    }

})


export default app;