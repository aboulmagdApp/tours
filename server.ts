import express from "express";
import { DataStore } from "./data/data";
import { apiGetTours } from "./api/tours/apiGetTours";
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail";

const app = express();
import * as bodyparser from "body-parser";
const jsonParser = bodyparser.json();

import { apiCreateTour } from "./api/tours/apiCreateTour";
import { apiDeletTour } from "./api/tours/apiDeleteTour";
import { apiUpdateTour } from "./api/tours/apiUpdateTour";
import { CustomeRequestHandeler } from "./api/model/express";

const authenticator:CustomeRequestHandeler = (req,res,next)=>{
    const username="Andy123";
    req.user = username;
    next();
}

const logger : CustomeRequestHandeler =(req,res,next)=>{
    console.log("user"+ req.user+ "-" +new Date +"-"+ req.method +"Requesst to"+ req.path);
    next();
}
app.use(authenticator);
app.use(logger);
app.get("/", (req, res, next) => {
    res.send("Tour Booking API.....");
});
app.get("/tours", apiGetTours);
app.get("/tours/:id", apiGetTourDetail);
app.post("/tours", jsonParser, apiCreateTour);
app.delete("/tours/:id", apiDeletTour);
app.patch("/tours/:id", jsonParser, apiUpdateTour);
app.listen(process.env.PORT || 5039, () => { console.log("Server Started.......")});