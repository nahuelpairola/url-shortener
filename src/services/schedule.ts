
import * as cron from 'node-cron';
import * as urlServices from './url'

export enum Times {
    EVERY_MINUTE = '* * * * *',
    EVERY_TEN_MINUTES = '10 * * * *',
    EVERY_HALF_HOUR = '0 */30 * * * *',
    EVERY_HOUR = '0 0 */1 * * *',
    EVERY_DAY = '* * 1 * *',
}

export async function startSchedules () {
    cron.schedule(Times.EVERY_DAY, deleteUrls)
}

async function deleteUrls () { // every minute
    const count = await urlServices.deleteExpiredUrls() // delete every hour urls with expired time
    const now = new Date() // now
    console.log(`Urls deleted at ${now} : ${count} urls`); // message
}