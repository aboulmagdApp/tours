import express from "express";
import { DataStore } from "./data/data";
import { apiGetTours } from "./api/tours/apiGetTours";
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail";

const app = express();
import * as bodyparser from "body-parser";
import { apiCreateTour } from "./api/tours/apiCreateTour";
import { apiDeletTour } from "./api/tours/apiDeleteTour";
import { apiUpdateTour } from "./api/tours/apiUpdateTour";
const jsonParser = bodyparser.json();

app.get("/", (req, res, next) => {
    res.send("Tour Booking API.....");
});
app.get("/tours", apiGetTours);
app.get("/tours/:id", apiGetTourDetail);
app.post("/tours", jsonParser, apiCreateTour);
app.delete("/tours/:id", apiDeletTour);
app.patch("/tours/:id", jsonParser, apiUpdateTour);
app.listen(process.env.PORT || 5038, () => { console.log("Server Started.......")});