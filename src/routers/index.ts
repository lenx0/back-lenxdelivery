import { Router } from "express";
import MainRouter from "./Routers";

const routers = Router();

routers.use("/v1/lenxdelivery", MainRouter);

export default routers;
