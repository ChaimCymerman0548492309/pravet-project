import { getNotes } from "../controllers/notes";
import app from "../app";
import express from "express";
import * as noteController from "../controllers/notes";

const router = express.Router();

app.get("/notes",noteController.getNotes);

router.post("/notes", noteController.createNote);

export default router;