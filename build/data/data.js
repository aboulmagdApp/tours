"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tours_json_1 = __importDefault(require("./tours.json"));
var reviews_json_1 = __importDefault(require("./reviews.json"));
var DataStore = /** @class */ (function () {
    function DataStore() {
    }
    DataStore.tours = tours_json_1.default;
    DataStore.reviews = reviews_json_1.default;
    return DataStore;
}());
exports.DataStore = DataStore;
