import {Request, Response } from "express";
import * as services from "../services/url";

export async function create (req:Request,res:Response) {
    const {url} = req.body
    const data = await services.create(url)
    res.json({
        success: true,
        message: 'Url shorted successful',
        data:data
    })
}

export async function search (req:Request,res:Response) {
    const {id} = req.params
    const urlOriginal = await services.searchOriginalUrl(id)
    res.status(302).redirect(urlOriginal)
}