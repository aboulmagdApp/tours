"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tourSummary_1 = require("./tourSummary");
var reviews_1 = require("./reviews");
var TourDetail = /** @class */ (function (_super) {
    __extends(TourDetail, _super);
    function TourDetail(tourData, reviewData) {
        var _this = _super.call(this, tourData) || this;
        _this.tourCategory = tourData.tourCategory;
        _this.tourDescription = tourData.tourDescription;
        _this.price = tourData.price;
        _this.currency = tourData.currency;
        _this.reviews = reviewData.map(function (item) { return new reviews_1.Review(item); });
        return _this;
    }
    return TourDetail;
}(tourSummary_1.TourSummary));
exports.TourDetail = TourDetail;
