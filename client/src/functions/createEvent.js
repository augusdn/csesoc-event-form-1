import React from 'react'

export const createEvent = (details) => {
    // details.portfolio.charAt(0).toUpperCase() + details.portfolio.slice(1)}
	// attendance={details.attendance}

    // create event
    const event = {
      'summary': details.eventName,
      'location': details.location,
      'description': details.descrption + '\nPricing' + details.pricing,
      'start': {
        "date": details.date,
        "dateTime": details.start,
      },
      'end': {
        "date": details.date,
        "dateTime": details.end,
      },
      'organizer': {
        "email": details.organiserEmail,
        "displayName": details.organiser,
      },
       "htmlLink": details.links,
    };

    // insert event here (send to google calendar)
    calendar.events.insert({
      auth: auth,
      calendarId: 'primary',
      resource: event,
    }, function(err, event) {
      if (err) {
        console.log('There was an error contacting the Calendar service: ' + err);
        return;
      }
      console.log('Event created: %s', event.htmlLink);
    });
}
