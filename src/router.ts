import { Express } from "express";
import exampleRouter from "./modules/example/example.router";

export default function initRoutes(app: Express) {
  app.use('/', exampleRouter);
}
