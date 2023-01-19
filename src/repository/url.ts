import UrlClass from "../types/Url"
import Url from "../models/url"

export async function create (urlObj : UrlClass) {
    return await Url.create(urlObj)
}

export async function getByUrlShort (urlShort:string) {
    return await Url.findOne({urlShort})
}

export async function getByUrlOrig (urlOrig:string) {
    return await Url.findOne({urlOrig})
}

export async function getById(id:string) {
    return await Url.findOne({id})
}