import React from "react";
import { Block, BlockDes, BlockHead, BlockHeadContent, BlockTitle } from "../../components/Component";
import RegularImage from "../../images/slides/slide-b.jpg";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

const Regularv2 = () => {
  return (
    <React.Fragment>
      <Head title="Regular v-2" />
      <Content>
        <iframe src="https://mypancho.com/appstore/" width="100%" height="742" >
      </iframe>
      </Content>
    </React.Fragment>
  );
};

export default Regularv2;
