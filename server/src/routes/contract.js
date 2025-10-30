import express from "express";
import { invokeIncrement } from "../controllers/contractController.js";

const router = express.Router();

router.post("/invoke", invokeIncrement);

export default router;
