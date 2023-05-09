import { nanoid } from "nanoid"

class Url {
    id: string
    urlOrig:string
    urlShort:string
    clicks: number
    createdAt:Date
    expiresAt:Date
    constructor(url:string,expiresIn:number) {
        this.id = nanoid()
        this.urlOrig = url
        this.urlShort = `${process.env.BASE}/${this.id}`
        this.clicks = 0
        this.createdAt = new Date()
        this.expiresAt = new Date(this.createdAt.getTime() + (expiresIn * 86400000 ))
    }
}

export default Url