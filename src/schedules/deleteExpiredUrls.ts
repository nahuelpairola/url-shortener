import * as urlServices from "../services/url";

export async function deleteExpiredUrls () {
    const count = await urlServices.deleteExpiredUrls()
    const date = new Date()
    console.log(`Urls expired at ${date} : ${count} urls`);
}
