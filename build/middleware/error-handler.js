"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
async function errorHandler(error, req, res, next) {
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
}
exports.errorHandler = errorHandler;
