import Url from '../types/Url'
import * as db from '../repository/url'
import { ErrorNotFound } from '../errors/ErrorNotFound'
import { ErrorBadRequest } from '../errors/ErrorBadRequest'

export async function create (url : string) {
    if(!url || !isValidHttpUrl(url)) throw new ErrorBadRequest('Url Bad Request')
    const urlMatched = await db.getByUrlOrig(url)
    if(urlMatched) return urlMatched.urlShort
    const newUrl = new Url(url)
    const result = await db.create(newUrl)
    return result.urlShort
}

export async function getOriginalUrl (id : string) {
    const result = await db.getById(id)
    if(!result) throw new ErrorNotFound('Url Not Found')
    return result.urlOrig
}

function isValidHttpUrl(str:string) {
  let url:any;
  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}