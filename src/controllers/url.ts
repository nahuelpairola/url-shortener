import {Request, Response } from "express";
import * as urlServices from "../services/url";

export async function create (req:Request,res:Response) {
    const {url,expiresIn} = req.body
    const data = await urlServices.create(url,expiresIn)
    res.json({
        success: true,
        message: 'Url shorted successful',
        data:data
    })
}

export async function get (req:Request,res:Response) {
    const {id} = req.params
    const data = await urlServices.getOriginalUrl(id)
    res.status(302).redirect(data)
}