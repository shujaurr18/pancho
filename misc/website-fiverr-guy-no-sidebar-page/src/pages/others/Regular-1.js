import React from "react";
import { Block, BlockDes, BlockHead, BlockHeadContent, BlockTitle, PreviewCard } from "../../components/Component";
import RegularImage from "../../images/slides/slide-b.jpg";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

const Regularv1 = () => {
  return (
    <React.Fragment>
      <Head title="Regular page v-1" />
      <Content>
      <iframe src="https://demo.mypancho.com" width="100%" height="900" >
      </iframe>
      </Content>
    </React.Fragment>
  );
};

export default Regularv1;
