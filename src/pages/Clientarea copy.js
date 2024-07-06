import React, { useEffect } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";

const Clientarea = () => {
  useEffect(() => {
    function adjustFrameHeight() {
      const iframe = document.getElementById('fullscreen-iframe');
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }

    window.onload = adjustFrameHeight;
    window.onresize = adjustFrameHeight;
  }, []);

  return (
    <React.Fragment>
      <Head title="Client Area" />
      <Content>
        <div style={{ height: 'calc(100vh - 129px)', overflow: 'hidden' }}>
          <iframe
            id="fullscreen-iframe"
            src="https://mypancho.com/appstore/browse-applications/asterigos-curse-of-the-stars/"
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
      </Content>
    </React.Fragment>
  );
};

export default Clientarea;
