"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
class Url {
    constructor(url) {
        this.id = (0, nanoid_1.nanoid)();
        this.urlOrig = url;
        this.urlShort = `${process.env.BASE}/${this.id}`;
        this.clicks = 0;
        this.createdAt = new Date();
    }
}
exports.default = Url;
