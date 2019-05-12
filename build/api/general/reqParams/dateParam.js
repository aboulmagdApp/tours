"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages_1 = require("../../model/shared/messages");
var dateFormat = new RegExp("(\\d{4})-(\\d{1,2})-(\\d{1,2})");
exports.dateParam = function (req, res, next, value, name) {
    var parsedComponent = dateFormat.exec(value);
    if (parsedComponent) {
        var _a = parsedComponent.map(function (item) { return parseInt(item); }), _ = _a[0], year = _a[1], month = _a[2], day = _a[3];
        var date = new Date(year, month - 1, day);
        req.params[name] = date;
        next();
    }
    else {
        next(new messages_1.APIError("Parse Error", "Date could not be parsed. Date Format: YYYY-MM-DD.", 400));
    }
};
