import React from 'react';
import { Container } from '@material-ui/core';

const Events = () => (
  <div id="eventsPageContainer">
    <h1 id="events-heading">Upcoming Pixel Vault Events</h1>
    <Container>
      <div id="calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=g79lojfecgksepd4rs9s3focuc%40group.calendar.google.com&ctz=America%2FLos_Angeles"
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
