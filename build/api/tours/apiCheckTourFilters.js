"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages_1 = require("../model/shared/messages");
var tourFilters_1 = require("../model/shared/tourFilters");
exports.apiCheckTourFilters = function (req, res, next) {
    var filters = new tourFilters_1.TourFilters(req.query);
    for (var _i = 0, _a = Object.getOwnPropertyNames(req.query); _i < _a.length; _i++) {
        var filter = _a[_i];
        if (!filters.hasOwnProperty(filter)) {
            next(new messages_1.APIError("Query String Error", "No such filter.", 400));
        }
    }
    next();
};
