export class ErrorBadRequest extends Error {
    message : string
    statusCode : number
    constructor(message:string) {
        super(message)
        this.message = message
        this.statusCode = 400
    }
}