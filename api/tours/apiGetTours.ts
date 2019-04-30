import { RequestHandler } from "express-serve-static-core";
import { DataStore } from "../../data/data";
import { TourSummary } from "../model/shared/tourSummary";


export const apiGetTours:RequestHandler = (req,res,next)=>{
    res.json(DataStore.tours.map((item:any)=> new TourSummary(item)));
}