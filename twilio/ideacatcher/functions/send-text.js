exports.handler = (context, event, callback) => {
  const client = context.getTwilioClient()

  client.messages.create({
    to: "+16479385063",
    from: context.PHONE_NUMBER,
    body: `New idea: ${event.TranscriptionText}`
  }).then((message) => {
    callback(null, `Sent message ${message.sid}`)
  }).catch((error) => {
    callback(error)
  })
};
