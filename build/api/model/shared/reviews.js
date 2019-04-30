"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Review = /** @class */ (function () {
    function Review(data) {
        this.tourID = data.tourID;
        this.reviewTitle = data.reviewTitle;
        this.reviewLongText = data.reviewLongText;
        this.stars = data.stars;
    }
    return Review;
}());
exports.Review = Review;
