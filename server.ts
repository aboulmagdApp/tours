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
import morgan from "morgan";
import path from "path";
import { apiUploadImage } from "./api/tours/apiUploadImage";
import { apiErrorHandler } from "./api/general/errorHandling";

const logger = morgan("dev");
app.use(logger);
app.use("/static",express.static(path.resolve("./","pubilc","img")));
app.get("/", (req, res, next) => {
    res.send("Tour Booking API.....");
});
app.get("/tours", apiGetTours);
app.get("/tours/:id", apiGetTourDetail);
app.post("/tours", jsonParser, apiCreateTour);
app.delete("/tours/:id", apiDeletTour);
app.patch("/tours/:id", jsonParser, apiUpdateTour);
app.post("/tours/:id/img",apiUploadImage);

app.use(apiErrorHandler);
app.listen(process.env.PORT || 5039, () => { console.log("Server Started.......")});