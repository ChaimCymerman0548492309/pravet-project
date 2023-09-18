import express, { NextFunction , request , response} from 'express';
import NoteModel from './models/note';
import morgan from'morgan';
import NotesRouter from './routes/notes';

const app = express();

app.use(express.json());

app.use("/api/notes", NotesRouter);

app.use(morgan('dev'));

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