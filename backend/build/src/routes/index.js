"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playerRoute_1 = __importDefault(require("./playerRoute"));
class Routes {
    constructor(app) {
        app.use("/api", playerRoute_1.default);
    }
}
exports.default = Routes;
