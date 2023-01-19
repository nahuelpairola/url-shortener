"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const urlSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
    },
    urlOrig: {
        type: String,
        required: true
    },
    urlShort: {
        type: String,
        required: true
    },
    createdAt: {
        required: true,
        type: Date,
    },
    expiresAt: {
        // required:true,
        type: Date,
    },
    clicks: {
        type: Number,
        default: 0
    }
}, { timestamps: false });
exports.default = mongoose_1.default.model('Url', urlSchema);
