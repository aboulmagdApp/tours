import { RequestHandler } from "express";
import { DataStore } from "../../../data/data";
import { PublicInfo, APIError } from "../../model/shared/messages";

export const apiDeletTour: RequestHandler = (req, res, next) => {
const tourID = req.params.id;
const tourIndex = DataStore.tours.findIndex((item:any) => item.id = tourID);
if(tourIndex > -1){
    DataStore.tours.splice(tourIndex,1);
    res.json(PublicInfo.infoDeleted());
}else{
    next(APIError.errNotFound());
}
}