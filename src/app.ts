import express from "express";
import cookieParser from "cookie-parser";
import initRoutes from "./router";
import globalErrorHandler from "./middlewares/global-error-handler";


const app = express();
app.use(express.json());
app.use(cookieParser());
initRoutes(app);



/** GlobalErrorHandler should be placed at the end **/
app.use(globalErrorHandler);
export default app;
