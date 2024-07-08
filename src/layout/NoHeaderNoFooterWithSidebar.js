import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./appbar/Appbar";
import Sidebar from "./sidebar/Sidebar";
import Head from "./head/Head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import AppRoot from "./global/AppRoot";
import AppMain from "./global/AppMain";
import AppWrap from "./global/AppWrap";
import AppWrapNoHeaderWithSideBar from "./global/AppWrapNoHeaderWithSideBar";
import SidebarWithTopAlign from "./sidebar/SidebarWithTopAlign";

const NoHeaderNoFooterWithSidebar = ({title, app, ...props}) => {  

  
  return (
      <>
        <Head title={!title && 'Pancho, Inc.'} />
        <AppRoot>
          <Appbar />
          <AppMain>
            <SidebarWithTopAlign fixed />
            <AppWrapNoHeaderWithSideBar>
              {/* <Header fixed /> */}
              <Outlet />
              {/* <Footer /> */}
            </AppWrapNoHeaderWithSideBar>
          </AppMain>
        </AppRoot>
      </>
  );
};
export default NoHeaderNoFooterWithSidebar;
