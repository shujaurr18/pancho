import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../layout/head/Head';
import Content from '../layout/content/Content';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Clientarea = () => {
  const query = useQuery();
  const pageUrl = query.get('page');
  const [iframeHeight, setIframeHeight] = useState('100%');
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
      // You can now interact with the iframe's document here
      console.log(iframeDocument);
    }
  }, [pageUrl]); // This will run the effect whenever the pageUrl changes
  
  if (!pageUrl) {
    return <div>No page URL provided</div>;
  }

  return (
    <React.Fragment>
      <Head title="Client Area" />
      <Content>
        <div style={{ height: 'calc(100vh - 129px)', overflow: 'auto' }}>
          <iframe
            id="fullscreen-iframe"
            ref={iframeRef}
            src={pageUrl}
            width="100%"
            height={iframeHeight}
            style={{
              border: 'none',
            }}
          />
        </div>
      </Content>
    </React.Fragment>
  );
};

export default Clientarea;
