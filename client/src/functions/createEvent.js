import React from 'react'

export const createEvent = (details) => {
    console.log(details);
    // create event
    const event = {
      'summary': details.eventName,
      'location': details.location,
      'description': details.description + '\nPricing' + details.pricing,
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

    return event;
}
