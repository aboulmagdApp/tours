"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
exports.apiDeletTour = function (req, res, next) {
    var tourID = req.params.id;
    var tourIndex = data_1.DataStore.tours.findIndex(function (item) { return item.id = tourID; });
    if (tourIndex > -1) {
        data_1.DataStore.tours.splice(tourIndex, 1);
        res.json({ "status": "success", "message": "Element removed" });
    }
    else {
        res.json({ "status": "error", "message": "Element not found" });
    }
};
