import React from 'react';
import { OrganizationJsonLd } from '../../../..';

function Organization() {
  return (
    <>
      <h1>Organization</h1>
      <OrganizationJsonLd
        type="Corporation"
        id="https://www.purpule-fox.io/#corporation"
        name="Purple Fox"
        legalName="Purple Fox LLC"
        logo="https://www.example.com/photos/logo.jpg"
        url="https://www.purpule-fox.io/"
        address={{
          streetAddress: '1600 Saratoga Ave',
          addressLocality: 'San Jose',
          addressRegion: 'CA',
          postalCode: '95129',
          addressCountry: 'US',
        }}
        contactPoints={[
          {
            contactType: 'customer service',
            telephone: '+1-877-746-0909',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish', 'French'],
            contactOption: 'TollFree',
          },
        ]}
        sameAs={['https://www.orange-fox.com']}
      />
    </>
  );
}

export default Organization;
