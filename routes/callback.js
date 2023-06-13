import express from "express";
import { callback } from "../controllers/callback.js";

const router = express.Router();

router.post("/", callback);

export default router;
