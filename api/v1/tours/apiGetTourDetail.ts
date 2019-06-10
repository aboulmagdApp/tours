import { RequestHandler } from "express";
import { TourDetail } from "../../model/shared/tourDetail";
import { fileMapper } from "../general/static";
import { db } from "../../../db/db";
import { APIError } from "../../model/shared/messages";
import { tours } from "../../../db/queries/sql";


export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    db.one(tours.getDetail, {id: tourID}).then(selectedTour => {
        if (selectedTour) {
            const imageUPLs = selectedTour.img.map(fileMapper(req.app.get("env")));
            db.any(tours.getAllReviews, {tourID: tourID}).then(selectedReviews => {
                res.json(new TourDetail(selectedTour, selectedReviews, imageUPLs));
            });
        }
        else {
            next(APIError.errNotFound());
        }
    });
};