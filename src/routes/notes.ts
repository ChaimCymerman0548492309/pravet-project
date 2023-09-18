import express from "express";
import * as noteController from "../controllers/notes";

const router = express.Router();

router.get("/notes",noteController.getNotes);

router.get("/notes/:id",noteController.getNotesById);

router.put("/notes/:id",noteController.updateNote);

router.post("/notes", noteController.createNote);

router.delete("/notes/:id",noteController.deleteNote);

console.log(2);


export default router;