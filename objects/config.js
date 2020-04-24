require('custom-env').env('../.env')

const config = {
    BOT_USERNAME: process.env.BOT_USERNAME,
    OAUTH_TOKEN: process.env.OAUTH_TOKEN,
    CHANNEL_NAME: process.env.CHANNEL_NAME,
    CLIENT_ID: process.env.CLIENT_ID
}
module.exports = config