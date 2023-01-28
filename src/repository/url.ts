import UrlClass from "../types/Url"
import Url from "../models/url"

export async function create (urlObj : UrlClass) {
    return await Url.create(urlObj)
}

export async function getByUrlShort (urlShort:string) {
    return await Url.findOne({urlShort})
}

export async function getByUrlOrig (urlOrig:string) {
    const url : any = await Url.findOne({urlOrig})
    return url
}

/**
 * 
 * @param id : string
 * @returns url : {_id, id, urlOrig, urlShort, createdAt, expiresAt, clicks}
 */
export async function getById (id:string) {
    // before getting an URL, clicks variable increases in one
    const url: any = await Url.findOneAndUpdate({id},{$inc:{clicks:1}},{new:true})
    return url
}

export async function deleteExpiredUrls () {
    const result:any = await Url.deleteMany({expiresAt:{$lt: new Date()}})
    return result.deletedCount
}
