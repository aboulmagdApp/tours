"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var messages_1 = require("../model/shared/messages");
exports.apiDownloadImage = function (req, res, next) {
    var fileID = req.params.id;
    res.download(path_1.default.resolve("./", "pubilc", "img", fileID), function (err) {
        if (err) {
            next(new messages_1.APIError("Download failed.", "Cannot download requested file.", 400));
        }
    });
};
