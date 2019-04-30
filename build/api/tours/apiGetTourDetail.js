"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
var tourDetail_1 = require("../model/shared/tourDetail");
exports.apiGetTourDetail = function (req, res, next) {
    var tourID = req.params.id;
    var selectedTour = data_1.DataStore.tours.find(function (element) { return element.id == tourID; });
    if (selectedTour) {
        var selectedReviews = data_1.DataStore.reviews.filter(function (item) { return item.tourID == tourID; });
        res.json(new tourDetail_1.TourDetail(selectedTour, selectedReviews));
    }
    else {
        res.json({ "status": "failed", "message": "Element not found" });
    }
};
