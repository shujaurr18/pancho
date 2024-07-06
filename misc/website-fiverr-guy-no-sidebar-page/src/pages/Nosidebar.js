import React from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";


const Nosidebar = () => {
  function adjustFrameHeight(){
    var iframe=document.getElementById('fullscreen-iframe');
    iframe.style.height=iframe.contentWindow.document.body.scrollHeight + 'px';
  }
  window.onload==adjustFrameHeight;
  window.onresize==adjustFrameHeight;

  return (
    <React.Fragment>
      <Head title="No side bar" />
      <Content>
        <iframe id='fullscreen-iframe' src="https://mypancho.com/appstore/color/" width="100%" 
        style={{height:'calc(100vh - 129px)'}}>
      </iframe>
      </Content>
    </React.Fragment>
  );
};

export default Nosidebar;









