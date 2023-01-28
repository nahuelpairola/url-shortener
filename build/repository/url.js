"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpiredUrls = exports.getById = exports.getByUrlOrig = exports.getByUrlShort = exports.create = void 0;
const url_1 = __importDefault(require("../models/url"));
async function create(urlObj) {
    return await url_1.default.create(urlObj);
}
exports.create = create;
async function getByUrlShort(urlShort) {
    return await url_1.default.findOne({ urlShort });
}
exports.getByUrlShort = getByUrlShort;
async function getByUrlOrig(urlOrig) {
    const url = await url_1.default.findOne({ urlOrig });
    return url;
}
exports.getByUrlOrig = getByUrlOrig;
/**
 *
 * @param id : string
 * @returns url : {_id, id, urlOrig, urlShort, createdAt, expiresAt, clicks}
 */
async function getById(id) {
    // before getting an URL, clicks variable increases in one
    const url = await url_1.default.findOneAndUpdate({ id }, { $inc: { clicks: 1 } }, { new: true });
    return url;
}
exports.getById = getById;
async function deleteExpiredUrls() {
    const result = await url_1.default.deleteMany({ expiresAt: { $lt: new Date() } });
    return result.deletedCount;
}
exports.deleteExpiredUrls = deleteExpiredUrls;
