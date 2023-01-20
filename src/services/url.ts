import Url from '../types/Url'
import * as db from '../repository/url'
import { ErrorNotFound } from '../errors/ErrorNotFound'
import { ErrorBadRequest } from '../errors/ErrorBadRequest'

/**
 * 
 * @param url : original url, url to short
 * @param expiresIn : integer, time in hours to live
 * @returns : urlShort, string
 */
export async function create (url : string, expiresIn:number) {
  if(!url || !isValidHttpUrl(url)) throw new ErrorBadRequest('Url Bad Request')
  if(!expiresIn || (!Number.isInteger(expiresIn) && Number(expiresIn)>0)) throw new ErrorBadRequest('Url Bad Request')
  const urlMatched = await db.getByUrlOrig(url)
  if(urlMatched) {
    return urlMatched.urlShort
  }
  const newUrl = new Url(url, expiresIn)
  const result = await db.create(newUrl)
  return result.urlShort
}

/**
 * 
 * @param id 
 * @returns 
 */
export async function getOriginalUrl (id : string) {
  const url = await db.getById(id)
  if(!url) throw new ErrorNotFound('Url Not Found')
  return url.urlOrig
}

/**
 * 
 * @param str 
 * @returns 
 */
function isValidHttpUrl(str:string) {
  let url:any;
  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}