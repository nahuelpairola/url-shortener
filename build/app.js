"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require('body-parser');
require('express-async-errors');
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
const app = express().use(bodyParser.json());
const port = process.env.PORT || 4000;
// routes
const url_1 = __importDefault(require("./routes/url"));
const error_handler_1 = require("./middleware/error-handler");
app.use('/api/v1', url_1.default);
app.use(error_handler_1.errorHandler);
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(4000, () => console.log(`url-shortener listening on http://localhost:${port}/api/v1`));
})
    .catch((err) => {
    console.log('An error has ocurred while connecting to database:', err);
});
