
import Url from '../types/Url'
import * as db from '../repository/url'
import { ErrorNotFound } from '../errors/ErrorNotFound'

export async function create (url : string, expiresIn:number) {
  const urlMatched = await db.getByUrlOrig(url)
  if(urlMatched) {
    return {url: urlMatched.urlShort, expiresAt: urlMatched.expiresAt}
  }
  const newUrl = new Url(url, expiresIn)
  const result = await db.create(newUrl)
  return {url: result.urlShort, expiresAt: result.expiresAt}
}

export async function getOriginalUrl (id : string) {
  const url = await db.getById(id)
  if(!url) throw new ErrorNotFound('Url Not Found')
  return url.urlOrig
}

export async function deleteExpiredUrls () {
  const deletedCount = await db.deleteExpiredUrls()
  return deletedCount
}
