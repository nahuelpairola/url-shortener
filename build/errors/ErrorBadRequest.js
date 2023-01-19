"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBadRequest = void 0;
class ErrorBadRequest extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
exports.ErrorBadRequest = ErrorBadRequest;
