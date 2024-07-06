import React from "react";
import { Card } from "reactstrap";
import {
  Accordian,
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Button,
  PreviewCard,
} from "../../components/Component";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

const Faq = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="FAQ" />
      <Content><iframe src="https://demo.agnidesigns.com/cartify/shop/?shop_layout_preset=7" width="100%" height="980" >
      </iframe>
      </Content>
    </React.Fragment>
  );
};

export default Faq;
