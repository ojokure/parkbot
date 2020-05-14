// async function sendWhatsApp(to, body, media) {
//   const auth = "twilio_clientid:twilio_api";
//   const sendURL =
//     "https://api.twilio.com/2010-04-01/Accounts/{account_id}/Messages.json";
//   const res = await fetch(sendURL, {
//     headers: {
//       Authorization: "Basic " + Buffer.from(auth).toString("base64"),
//     },
//     method: "POST",
//     body: objToFORM(
//       JSONRemoveUndefined({
//         To: "whatsapp:+972" + to.replace(/-/g, "").replace(/^0/, ""),
//         From: "whatsapp:+18454069614",
//         Body: body,
//         MediaUrl: media,
//       })
//     ),
//   });
// }

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: "whatsapp:+234 803 693 8179",
    body: "Hello there!",
    to: "whatsapp:+1 415 523 8886",
  })
  .then((message) => console.log(message.sid));
