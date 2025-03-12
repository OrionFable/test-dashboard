"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/index"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const app = (0, express_1.default)();
new index_1.default(app);
const HOST = process.env.HOST ? process.env.HOST : "localhost";
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const corsOptions = {
    credentials: true,
    origin: [`http://${HOST}:${PORT}`] // Whitelist the domains you want to allow
};
// Middleware
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
