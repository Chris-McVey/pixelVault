import React from 'react';
import { Container } from '@material-ui/core';

const Events = () => (
  <div id="events-page-container">
    <Container>
      <div id="calendar-container">
        <h1 id="events-heading">Upcoming Pixel Vault Events</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ODdubDZ2Z3VuMG5tY2VnbGJuNG52ZTZoMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTitle=0&amp;showTz=1"
          style={{
            border: 0,
            width: 800,
            height: 600,
            frameBorder: 0,
            scrolling: 'no',
          }}
          title="Google Calendar iFrame"
          id="google-calendar"
        />
      </div>
    </Container>
  </div>
);

export default Events;
