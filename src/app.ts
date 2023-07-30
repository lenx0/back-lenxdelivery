import express from "express";
import routers from "./routers";
import cors from "cors";

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(routers);

export { app };