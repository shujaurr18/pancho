import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

const BlankPage = () => {
  return (
    <React.Fragment>
      <Head title="Blank Page" />
      <Content>
      <iframe src="https://woodmart.xtemos.com/games/all-games/" width="100%" height="900" >
      </iframe>
      </Content>
    </React.Fragment>
  );
};

export default BlankPage;
