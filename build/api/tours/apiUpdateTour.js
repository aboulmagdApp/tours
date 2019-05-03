"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
exports.apiUpdateTour = function (req, res, next) {
    var tourID = req.params.id;
    var tourIndex = data_1.DataStore.tours.findIndex(function (item) { return item.id = tourID; });
    if (tourIndex > -1) {
        var originalTour = data_1.DataStore.tours[tourIndex];
        var newTour = {
            id: tourID,
            location: req.body.location || originalTour.location,
            tourTitle: req.body.tourTitle || originalTour.tourTitle,
            tourCategory: req.body.tourCategory || originalTour.tourCategory,
            tourDescription: req.body.tourDescription || originalTour.tourDescription,
            price: req.body.price || originalTour.price,
            currency: req.body.currency || originalTour.currency,
            img: originalTour.img
        };
        data_1.DataStore.tours[tourIndex] = newTour;
        res.json({ "status": "success", "message": "Element updated" });
    }
    else {
        res.json({ "status": "error", "message": "Element not found" });
    }
};
