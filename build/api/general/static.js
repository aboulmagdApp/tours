"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var v4_1 = __importDefault(require("uuid/v4"));
function getStaticHome(env) {
    switch (env) {
        case "development":
            return "http://localhost:5039/static/";
        case "production":
        //....CDN....        
    }
}
exports.getStaticHome = getStaticHome;
function fileMapper(env) {
    return function (filename) { return getStaticHome(env) + filename; };
}
exports.fileMapper = fileMapper;
function getFileUploader(env) {
    switch (env) {
        case "development":
            var fileID_1 = v4_1.default();
            var fileStore = multer_1.default.diskStorage({
                destination: function (req, file, callback) {
                    callback(null, path_1.default.resolve("./", "pubilc", "img"));
                },
                filename: function (req, file, callback) {
                    callback(null, fileID_1 + path_1.default.extname(file.originalname));
                }
            });
            return multer_1.default({ storage: fileStore }).single("file");
        case "production":
            return function (req, res, next) { next(); };
        default:
            return function (req, res, next) { next(); };
    }
}
exports.getFileUploader = getFileUploader;
