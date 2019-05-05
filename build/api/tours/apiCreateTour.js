"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var v4_1 = __importDefault(require("uuid/v4"));
var data_1 = require("../../data/data");
var messages_1 = require("../model/shared/messages");
exports.apiCreateTour = function (req, res, next) {
    var requiredFields = ["tourTitle", "location"];
    var givenFields = Object.getOwnPropertyNames(req.body);
    if (!requiredFields.every(function (field) { return givenFields.includes(field); })) {
        return next(new messages_1.APIError("Data missing", "Not All required field Supported..", 400));
    }
    ;
    var newTour = {
        id: v4_1.default(),
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || 0,
        currency: req.body.currency || "",
        img: []
    };
    data_1.DataStore.tours.push(newTour);
    res.json(new messages_1.PublicInfo("Tour added", 200, { tour: newTour }));
};
