import {google} from 'googleapis'
import sampleClient from './SampleClient'
import fs from 'fs'

// initialize the API library
const calendar = google.calendar({
  version: 'v3',
  auth: sampleClient.oAuth2Client,
});


async function runSample(event) {
  const res = await calendar.events.insert({
    auth: sampleClient.oAuth2Client,
    calendarId: 'primary', // is it primary
    resource: event,
  }, function(err, event) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    console.log('Event created');
  });
  console.log('\n\n');
  console.log(res.data);
  return res.data;
}

if (module === require.main) {
  const scopes = ['https://www.googleapis.com/auth/calendar'];
  sampleClient
    .authenticate(scopes)
    .then(runSample)
    .catch(console.error);
}

export default {
  runSample,
  client: sampleClient.oAuth2Client,
};
