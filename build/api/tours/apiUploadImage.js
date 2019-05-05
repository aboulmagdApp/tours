"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../data/data");
var static_1 = require("../general/static");
exports.apiUploadImage = function (req, res, next) {
    var tourID = req.params.id;
    var tourIndex = data_1.DataStore.tours.findIndex(function (item) { return item.id == tourID; });
    if (tourIndex == -1) {
        res.json({ "status": "error", "message": "Tour not found" });
    }
    else {
        var upload = static_1.getFileUploader(req.app.get("env"));
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
                res.json({ "status": "error", "message": "File upload failed." });
            }
            else {
                data_1.DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json({ "status": "success", "message": "File uploaded." });
            }
        });
    }
};
