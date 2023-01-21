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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpiredUrls = exports.getOriginalUrl = exports.create = void 0;
const Url_1 = __importDefault(require("../types/Url"));
const db = __importStar(require("../repository/url"));
const ErrorNotFound_1 = require("../errors/ErrorNotFound");
const ErrorBadRequest_1 = require("../errors/ErrorBadRequest");
/**
 *
 * @param url : original url, url to short
 * @param expiresIn : integer, time in hours to live
 * @returns : urlShort, string
 */
function create(url, expiresIn) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!url || !isValidHttpUrl(url))
            throw new ErrorBadRequest_1.ErrorBadRequest('Url Bad Request');
        if (!expiresIn || (!Number.isInteger(expiresIn) && Number(expiresIn) > 0))
            throw new ErrorBadRequest_1.ErrorBadRequest('Url Bad Request');
        const urlMatched = yield db.getByUrlOrig(url);
        if (urlMatched) {
            return urlMatched.urlShort;
        }
        const newUrl = new Url_1.default(url, expiresIn);
        const result = yield db.create(newUrl);
        return result.urlShort;
    });
}
exports.create = create;
/**
 *
 * @param id
 * @returns
 */
function getOriginalUrl(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = yield db.getById(id);
        if (!url)
            throw new ErrorNotFound_1.ErrorNotFound('Url Not Found');
        return url.urlOrig;
    });
}
exports.getOriginalUrl = getOriginalUrl;
function deleteExpiredUrls() {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedCount = yield db.deleteExpiredUrls();
        return deletedCount;
    });
}
exports.deleteExpiredUrls = deleteExpiredUrls;
/**
 *
 * @param str
 * @returns
 */
function isValidHttpUrl(str) {
    let url;
    try {
        url = new URL(str);
    }
    catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
