import express from "express";
const app = express();
import { routerV1 } from "./api/v1/v1";

app.disable("x-powered-by");
app.use("/v1",routerV1);
app.listen(process.env.PORT || 5039, () => { console.log("Server Started.......") });