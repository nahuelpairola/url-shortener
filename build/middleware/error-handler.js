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
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(error, req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let middlewareError = {
            message: error.message || 'Internal Server Error',
            statusCode: 500
        };
        if (error.message === 'Url Bad Request') {
            middlewareError.statusCode = 400;
        }
        if (error.message === 'Url Not Found') {
            middlewareError.statusCode = 404;
        }
        console.log("Error Handling Middleware called");
        console.log('Path: ', req.path);
        console.log(error);
        return res.status(middlewareError.statusCode).json({
            success: false,
            message: middlewareError.message,
            data: null
        });
    });
}
exports.errorHandler = errorHandler;
