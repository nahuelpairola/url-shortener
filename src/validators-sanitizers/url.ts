import Joi from 'joi'

function isValidHttpUrl(str:string, helper: any) {
    let url:any;
    try {
      url = new URL(str);
    } catch (_) {
      return helper.error('Url provided is not valid');
    }
    if(url.protocol === "http:" || url.protocol === "https:") return str
    else return helper.error('Url provided is not valid');
  }

export const UrlBody = Joi.object({ 
    url: Joi.string().custom(isValidHttpUrl,'url validator').required(),
    expiresIn: Joi.number().integer().min(1).max(15).required()
})

export const UrlId = Joi.object({
  id:Joi.string().required()
})
