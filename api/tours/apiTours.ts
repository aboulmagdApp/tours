import { Router } from "express";
import { apiCheckTourFilters } from "./apiCheckTourFilters";
import { apiGetTourDetail } from "./apiGetTourDetail";
import { apiCreateTour } from "./apiCreateTour";
import { apiDeletTour } from "./apiDeleteTour";
import { apiUpdateTour } from "./apiUpdateTour";
import { apiUploadImage } from "./apiUploadImage";
import { apiGetTours } from "./apiGetTours";
import { jsonParser } from "../general/bodyParser";

export let toursRouter = Router();

toursRouter.get("/",apiCheckTourFilters, apiGetTours);
toursRouter.get("/:id", apiGetTourDetail);
toursRouter.post("/", jsonParser, apiCreateTour);
toursRouter.delete("/:id", apiDeletTour);
toursRouter.patch("/:id", jsonParser, apiUpdateTour);
toursRouter.post("/:id/img", apiUploadImage);