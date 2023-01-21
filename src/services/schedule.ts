import * as cron from 'node-cron'

import * as urlServices from './url'

const EVERY_MINUTE = '* * * * *'
const EVERY_HALF_HOUR = '30 * * * *'
const EVERY_HOUR = '* 1 * * *'
const EVERY_DAY = '* * 1 * *'

export async function startSchedules () {
    cron.schedule(EVERY_DAY, deleteUrls)
}

async function deleteUrls () { // every minute
    const count = await urlServices.deleteExpiredUrls() // delete every hour urls with expired time
    const now = new Date() // now
    console.log(`Urls deleted at ${now} : ${count} urls`); // message
}