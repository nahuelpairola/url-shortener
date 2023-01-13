import UrlClass from "../types/Url"
import Url from "../models/url"

export async function create (urlObj : UrlClass) {
    return await Url.create(urlObj)
}

export async function searchByUrlShort (urlShort:string) {
    return await Url.findOne({urlShort})
}

export async function searchByUrlOrig (urlOrig:string) {
    return await Url.findOne({urlOrig})
}

export async function searchById(id:string) {
    return await Url.findOne({id})
}