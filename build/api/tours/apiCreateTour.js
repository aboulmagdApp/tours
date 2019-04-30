"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var v4_1 = __importDefault(require("uuid/v4"));
var data_1 = require("../../data/data");
exports.apiCreateTour = function (req, res, next) {
    var newTour = {
        id: v4_1.default(),
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || 0,
        currency: req.body.currency || ""
    };
    data_1.DataStore.tours.push(newTour);
    res.send("New Tour added!");
};
