const tmi = require('tmi.js');
const config = require("./objects/config")

const AllInOne = require("./objects/allinone");
const Line = require("./objects/line")
const getData = require("./objects/requestHandler")
const ourFullData = new AllInOne();

// Define configuration options
const opts = {
    identity: {
        username: config.BOT_USERNAME,
        password: config.OAUTH_TOKEN
    },

    channels: [config.CHANNEL_NAME]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim().toLowerCase();
    console.log(context)

    getData(context["user-id"])
        .then((dt) => {
            addCom(context["username"], msg, dt.data.logo, "black")

        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })

    // If the command is known, let's execute it
    if (commandName === '!dice') {
        client.say(target, `You rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);
    } else {
        console.log(`* Unknown command ${commandName}`);
    }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}

function addCom(name, text, img, nameColor) {
    let newCom = new Line(name, text, img, nameColor);
    ourFullData.lines.unshift(newCom)
    document.getElementById("root").innerHTML = ourFullData.render()
}