"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
var tourSummary_1 = require("../model/shared/tourSummary");
var tourFilters_1 = require("../model/shared/tourFilters");
exports.apiGetTours = function (req, res, next) {
    var filters = new tourFilters_1.TourFilters(req.query);
    var filterData = data_1.DataStore.tours.filter(function (item) {
        var conditions = [
            filters.location ? (item.location == filters.location) : true,
            filters.priceMin ? (item.price > filters.priceMin) : true,
            filters.priceMax ? (item.price < filters.priceMax) : true
        ];
        return conditions.every(function (value) { return value == true; });
    });
    res.json(filterData.map(function (item) { return new tourSummary_1.TourSummary(item); }));
};
