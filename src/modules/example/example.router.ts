import { Router } from "express";
import * as exampleController from "./example.controller";
import { log } from "./middlewares/example.middleware";

const exampleRouter = Router();

exampleRouter.get('/', log, exampleController.create);



export default exampleRouter;