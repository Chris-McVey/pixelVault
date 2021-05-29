import React from 'react';

const Contact = () => {
  const styling = {
    border: 0,
  };
  return (
    <div className="contact-container">
      <h1 id="contact-heading">Contact Us</h1>
      <div className="image-next-to-map">
        <img src="../assets/storeExterior.jpeg" alt="Store exterior" />
      </div>
      <div className="phone-sm">
        <a href="tel:(909)664-7634">Call: (909)664-7634</a>
        Hours???
      </div>
      <div className="map-holder">
        <iframe
          title="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2510873975575!2d-117.66847098442098!3d34.063077180603095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c33391f06159ef%3A0xfa790ae5d3d6002d!2sPixel%20Vault%20Games!5e0!3m2!1sen!2sus!4v1622244894157!5m2!1sen!2sus"
          width="600"
          height="450"
          style={styling}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Contact;
