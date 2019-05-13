import { Router } from "express";
import { apiCors } from "./general/coes";
import { logger } from "./general/logging";
import { apiValidation } from "./general/validation";
import express = require("express");
import path from "path";
import { userRouter } from "./users/apiUsers";
import { toursRouter } from "./tours/apiTours";
import { apiDownloadImage } from "./tours/apiDownloadImage";
import { apiErrorHandler } from "./general/errorHandling";
export let routerV1 = Router();

routerV1.use(apiCors);

routerV1.use(logger);
routerV1.use(apiValidation);
routerV1.get("/headers", (req, res, next) => res.json(req.headers));
routerV1.use("/static", express.static(path.resolve("./", "pubilc", "img")));
routerV1.get("/", (req, res, next) => {
    res.send("Tour Booking API.....");
});
routerV1.use("/users",userRouter);
routerV1.use("/tours",toursRouter);
routerV1.get("/static/download/:id", apiDownloadImage);
routerV1.use(apiErrorHandler);