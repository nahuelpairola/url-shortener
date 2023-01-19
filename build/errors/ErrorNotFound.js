"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorNotFound = void 0;
class ErrorNotFound extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
exports.ErrorNotFound = ErrorNotFound;
