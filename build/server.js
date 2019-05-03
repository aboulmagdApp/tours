"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apiGetTours_1 = require("./api/tours/apiGetTours");
var apiGetTourDetail_1 = require("./api/tours/apiGetTourDetail");
var app = express_1.default();
var bodyparser = __importStar(require("body-parser"));
var jsonParser = bodyparser.json();
var apiCreateTour_1 = require("./api/tours/apiCreateTour");
var apiDeleteTour_1 = require("./api/tours/apiDeleteTour");
var apiUpdateTour_1 = require("./api/tours/apiUpdateTour");
var authenticator = function (req, res, next) {
    var username = "Andy123";
    req.user = username;
    next();
};
var logger = function (req, res, next) {
    console.log("user" + req.user + "-" + new Date + "-" + req.method + "Requesst to" + req.path);
    next();
};
app.use(authenticator);
app.use(logger);
app.get("/", function (req, res, next) {
    res.send("Tour Booking API.....");
});
app.get("/tours", apiGetTours_1.apiGetTours);
app.get("/tours/:id", apiGetTourDetail_1.apiGetTourDetail);
app.post("/tours", jsonParser, apiCreateTour_1.apiCreateTour);
app.delete("/tours/:id", apiDeleteTour_1.apiDeletTour);
app.patch("/tours/:id", jsonParser, apiUpdateTour_1.apiUpdateTour);
app.listen(process.env.PORT || 5039, function () { console.log("Server Started......."); });
