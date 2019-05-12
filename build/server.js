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
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var apiUploadImage_1 = require("./api/tours/apiUploadImage");
var errorHandling_1 = require("./api/general/errorHandling");
var messages_1 = require("./api/model/shared/messages");
var logger = morgan_1.default("dev");
app.use(logger);
app.use(function (req, res, next) {
    if (req.accepts("application/json")) {
        next();
    }
    else {
        next(new messages_1.APIError("content Type not Supported", "this API only Supports applicaton/json", 400));
    }
});
app.get("/headers", function (req, res, next) { return res.json(req.headers); });
app.use("/static", express_1.default.static(path_1.default.resolve("./", "pubilc", "img")));
app.get("/", function (req, res, next) {
    res.send("Tour Booking API.....");
});
app.get("/bookings/:id(\\d{4})", function (req, res, next) { return res.json(req.params); });
app.get("/tours", apiGetTours_1.apiGetTours);
app.get("/tours/:id", apiGetTourDetail_1.apiGetTourDetail);
app.post("/tours", jsonParser, apiCreateTour_1.apiCreateTour);
app.delete("/tours/:id", apiDeleteTour_1.apiDeletTour);
app.patch("/tours/:id", jsonParser, apiUpdateTour_1.apiUpdateTour);
app.post("/tours/:id/img", apiUploadImage_1.apiUploadImage);
app.use(errorHandling_1.apiErrorHandler);
app.listen(process.env.PORT || 5039, function () { console.log("Server Started......."); });
