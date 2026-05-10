import React from 'react';

const Instagram = () => {
  return (
    <div id="instagram-container">
      <h2 id="instagram-heading">
        Follow us on Instagram to be first to see what&apos;s in stock!
      </h2>
      <div id="curator-feed-default-feed-layout" />
      <script type="text/javascript">
        {(function () {
          const i = document.createElement('script');
          i.async = 1;
          i.src =
            'https://cdn.curator.io/published/3be627e1-2f55-46a6-a1d1-14d6ce43ad0c.js';
          const e = document.getElementsByTagName('script')[0];
          e.parentNode.insertBefore(i, e);
        })()}
      </script>
    </div>
  );
};

export default Instagram;
