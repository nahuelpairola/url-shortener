
import * as schedule from "node-schedule";

import {deleteExpiredUrls} from "./deleteExpiredUrls";

enum Times {
    EVERY_MINUTE = '* * * * *',
    EVERY_TEN_MINUTES = '10 * * * *',
    EVERY_HALF_HOUR = '0 */30 * * * *',
    EVERY_HOUR = '0 0 */1 * * *',
    EVERY_DAY = '* * 1 * *',
}

export async function runSchedules () {
    schedule.scheduleJob(Times.EVERY_DAY, deleteExpiredUrls)
    // schedule.scheduleJob(<insert new cron time>, <insert function>)
}

