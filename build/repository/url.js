"use strict";
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
exports.increaseClicksById = exports.getById = exports.getByUrlOrig = exports.getByUrlShort = exports.create = void 0;
const url_1 = __importDefault(require("../models/url"));
function create(urlObj) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield url_1.default.create(urlObj);
    });
}
exports.create = create;
function getByUrlShort(urlShort) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield url_1.default.findOne({ urlShort });
    });
}
exports.getByUrlShort = getByUrlShort;
function getByUrlOrig(urlOrig) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield url_1.default.findOne({ urlOrig });
    });
}
exports.getByUrlOrig = getByUrlOrig;
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield url_1.default.findOne({ id });
    });
}
exports.getById = getById;
function increaseClicksById(id, clicks) {
    return __awaiter(this, void 0, void 0, function* () {
        yield url_1.default.updateOne({ id }, { clicks });
    });
}
exports.increaseClicksById = increaseClicksById;
