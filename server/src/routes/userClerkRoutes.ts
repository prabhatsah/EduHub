import express from "express";
import { updateuser } from "../controllers/userClerkController";

const router = express.Router();

router.put("/:userId", updateuser);

export default router;
