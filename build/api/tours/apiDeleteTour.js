"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
var messages_1 = require("../model/shared/messages");
exports.apiDeletTour = function (req, res, next) {
    var tourID = req.params.id;
    var tourIndex = data_1.DataStore.tours.findIndex(function (item) { return item.id = tourID; });
    if (tourIndex > -1) {
        data_1.DataStore.tours.splice(tourIndex, 1);
        res.json(new messages_1.PublicInfo("Tour deleted", 200));
    }
    else {
        next(new messages_1.APIError("Validation Error", "Tour Not Found", 400));
    }
};
