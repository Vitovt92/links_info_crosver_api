import { Router } from "express";
import LocationController from "../controllers/LocationController";

const router = Router();

router.get("/", LocationController.listAll);


export default router;