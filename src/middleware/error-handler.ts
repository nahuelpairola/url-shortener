import { NextFunction, Request, Response } from "express";
import { ErrorBadRequest } from "../errors/ErrorBadRequest";
import { ErrorNotFound } from "../errors/ErrorNotFound";

export async function errorHandler(error:any,req:Request,res:Response,next:NextFunction) {
    let middlewareError = {
        message: error.message || 'Internal Server Error', 
        statusCode: 500
    }
    if(middlewareError.message === 'Url Bad Request') {
        middlewareError.statusCode = 400
    }
    if(middlewareError.message === 'Url Not Found') {
        middlewareError.statusCode = 404
    }
    console.log("Error Handling Middleware called")
    console.log('Path: ', req.path)
    console.log(error)

    return res.status(middlewareError.statusCode).json({
        success: false,
        message: middlewareError.message,
        data: null
    })
}