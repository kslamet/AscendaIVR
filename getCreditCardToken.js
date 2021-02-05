/**
 *  Simple Menu Template
 *
 *  This Function builds a simple IVR menu. Learn more about <Gather> at:
 *  https://www.twilio.com/docs/api/twiml/gather
 */
exports.handler = function (context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse();
  var token = 'abcdabcdabcdabcd';

  if (event.Digits === null) {
    twiml
    .gather({numDigits: 16,
        input: 'dtmf',
          timeout: '15'
    })
    .say('Enter 16 Digit PAN number, followed by the pound key')

    // get token with the 16 digit PAN number

  }
    else {
      twiml.redirect({
        method: 'POST'
        }, 'https://webhooks.twilio.com/v1/Accounts/AC0e949cb990989923aed8839c12e36c6e/Flows/FW26790e96651d1e7cc4151ecfee0e76d5?FlowEvent=return&token='+token);
    }
  callback(null, twiml)
}
