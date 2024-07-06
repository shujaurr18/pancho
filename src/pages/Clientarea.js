import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const IframeComponent = () => {
  const [iframeSrc, setIframeSrc] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Function to get URL parameter
    const getUrlParameter = (name) => {
      const params = new URLSearchParams(location.search);
      return params.get(name);
    };

    // Get the 'pagelink' parameter from the URL, which is set like this clientarea?pagelink=appstore/product/everdream-valley/
    const pageLink = getUrlParameter('pagelink');

    // If 'pagelink' parameter is present, set the iframe URL
    if (pageLink) {
      setIframeSrc(`https://mypancho.com/${pageLink}`);
    }
  }, [location]);

  return (
    <div>
      {iframeSrc ? (
         <div style={{ height: 'calc(100vh - 129px)', overflow: 'hidden' }}>
         <iframe
           id="fullscreen-iframe"
             src={iframeSrc}
          title="Dynamic Iframe"
           width="100%"
           style={{
             height: '100%',
             border: 'none',
             overflow: 'scroll',
             scrollbarWidth: 'thin', // For Firefox
             msOverflowStyle: 'none' // For Internet Explorer and Edge
           }}
         />
       </div>
     
      ) : (
        <p>Opps. No valid page url provided...</p>
      )}
    </div>
  );
};

export default IframeComponent;
