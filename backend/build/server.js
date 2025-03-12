"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/index"));
require("dotenv").config();
const app = (0, express_1.default)();
new index_1.default(app);
const HOST = process.env.HOST ? process.env.HOST : "localhost";
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
// Middleware
app.use(express_1.default.json());
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
