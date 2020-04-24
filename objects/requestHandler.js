const axios = require("axios")
const twitchAPI = axios.create({
    baseURL: "https://api.twitch.tv/kraken",
    headers: {
        Authorization: `OAuth ${config.OAUTH_TOKEN}`,
        'Client-ID': config.CLIENT_ID,
        Accept: "application/vnd.twitchtv.v5+json"
    }
})
module.exports = async function getData(userID) {
    const req = await twitchAPI.get(`/users/${userID}`)
    return req
}