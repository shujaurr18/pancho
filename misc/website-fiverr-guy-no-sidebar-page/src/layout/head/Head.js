import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ ...props }) => {
  return (
    <Helmet>
      <title>{props.title ? props.title + " | " : null} Mypancho.com Cloud Hosting Platform</title>
    </Helmet>
  );
};
export default Head;
