"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
var tourSummary_1 = require("../model/shared/tourSummary");
exports.apiGetTours = function (req, res, next) {
    res.json(data_1.DataStore.tours.map(function (item) { return new tourSummary_1.TourSummary(item); }));
};
