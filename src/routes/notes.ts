import { getNotes } from "../controllers/notes";
import app from "../app";
import express from "express";
import * as noteController from "../controllers/notes";

const router = express.Router();

app.get("/notes",noteController.getNotes);

app.get("/notes/:id",noteController.getNotesById);

app.put("/notes/:id",noteController.updateNote);

router.post("/notes", noteController.createNote);
console.log(2);


export default router;