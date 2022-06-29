require("dotenv").config();

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const PHONE_NUMBER = process.env.PHONE_NUMBER;
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

exports.handler = (context, event, callback) => {
  client.messages
    .create({
      body: `Transcription: ${event.TranscriptionText}`,
      from: PHONE_NUMBER,
      to: "+15558675310"
    })
    .then((message) => console.log(message.sid));

  callback(null, "console check");
};
