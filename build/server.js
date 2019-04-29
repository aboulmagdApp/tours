"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/", (req, res, next) => {
    res.send("Tour Booking API.....");
});
app.get("/tours", (req, res, next) => {
    res.send("get List of tours API.....");
});
app.post("/tours", (req, res, next) => {
    res.send("Add new Tour API.....");
});
app.listen(process.env.PORT || 4038, () => { console.log("Server Started......."); });
