import express from "express";
const app = express();
import path from "path";
import { apiErrorHandler } from "./api/general/errorHandling";
import { apiDownloadImage } from "./api/tours/apiDownloadImage";
import { userRouter } from "./api/users/apiUsers";
import { toursRouter } from "./api/tours/apiTours";
import { apiCors } from "./api/general/coes";
import { logger } from "./api/general/logging";
import { apiValidation } from "./api/general/validation";

app.disable("x-powered-by");
app.use(apiCors);

app.use(logger);
app.use(apiValidation);
app.get("/headers", (req, res, next) => res.json(req.headers));
app.use("/static", express.static(path.resolve("./", "pubilc", "img")));
app.get("/", (req, res, next) => {
    res.send("Tour Booking API.....");
});
app.use("/users",userRouter);
app.use("/tours",toursRouter);
app.get("/static/download/:id", apiDownloadImage);
app.use(apiErrorHandler);
app.listen(process.env.PORT || 5039, () => { console.log("Server Started.......") });