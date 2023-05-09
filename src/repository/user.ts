
import UserModel from '../models/user'
import User from '../types/User'

export async function create (user : User) {
    return await UserModel.create(user)
}

export async function getByUserName (userName:string) {
    return await UserModel.findOne({userName})
}

