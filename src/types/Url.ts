import { nanoid } from "nanoid"

class Url {
    id: string
    urlOrig:string
    urlShort:string
    clicks: number
    createdAt:Date
    constructor(url:string) {
        this.id = nanoid()
        this.urlOrig = url
        this.urlShort = `${process.env.BASE}/${this.id}`
        this.clicks = 0
        this.createdAt = new Date()
    }
}

export default Url