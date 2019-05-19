import { RequestHandler } from "express";
import { db, pgp } from "../../../db/db";
import { PublicInfo } from "../../model/shared/messages";
const caseConverter = require("change-case-object");

export const apiUpdateTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const data = caseConverter.snakeCase(req.body);
    const sql = pgp.helpers.update(data, undefined, "tours") + " where id ='" + tourID + "'";
    db.none(sql).then(() => {
        res.json(PublicInfo.infoUpdated({updatedTour: data}));
    })
}