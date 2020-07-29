import { Router, Request, Response } from "express";
import location from "./location";


const routes = Router();

routes.use('/location', location);


export default routes;