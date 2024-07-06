import React, { useState } from "react";
import { DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";
import { Icon } from "../../../../components/Component";
import { LinkList, LinkItem } from "../../../../components/links/Links";
import UserAvatar from "../../../../components/user/UserAvatar";
import { useTheme, useThemeUpdate } from "../../../provider/Theme";

const User = () => {
  const theme = useTheme();
  const themeUpdate = useThemeUpdate();
  const [open, setOpen] = useState(false);
  const toggle = () => {   
    themeUpdate.sidebarHide();
    setOpen((prevState) => !prevState)
  };

  return (
    <Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
      <DropdownToggle
        tag="a"
        href="#toggle"
        className="dropdown-toggle"
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <UserAvatar icon="user-alt" className="sm" />
      </DropdownToggle>
      <DropdownMenu end className="dropdown-menu-md dropdown-menu-s1">
        <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
          <div className="user-card sm">
            <div className="user-avatar">
              <span>Hi</span>
            </div>
            <div className="user-info">
              <span className="lead-text">Profile Management</span>
              <span className="sub-text">Settings and Options</span>
            </div>
          </div>
        </div>
        <div className="dropdown-inner">
        <LinkList>
                <LinkItem link="/user-profile-regular" icon="meter" onClick={toggle}>
                    Account Sign In
                  </LinkItem>
                  <LinkItem link="/user-profile-regular" icon="user-alt" onClick={toggle}>
                    View Profile
                  </LinkItem>
                  <LinkItem link="/user-profile-setting" icon="opt" onClick={toggle}>
                    Account Setting
                  </LinkItem>
                  <LinkItem link="/user-profile-regular" icon="cart" onClick={toggle}>
                    View My Cart
                  </LinkItem>
                  <LinkItem link="/user-profile-setting" icon="list-index" onClick={toggle}>
                    Email History
                  </LinkItem>
                  <LinkItem link="/user-profile-activity" icon="activity-alt" onClick={toggle}>
                    Account Security
                  </LinkItem>
                  <LinkItem link="/user-profile-activity" icon="briefcase" onClick={toggle}>
                    Affiliate Details
                  </LinkItem>
                  <LinkItem link="/user-profile-activity" icon="cc-alt" onClick={toggle}>
                    Payment Methods
                  </LinkItem>
                  <LinkItem link="/user-profile-activity" icon="shield-check" onClick={toggle}>
                  Change Password
                  </LinkItem>
                
            <li>
              <a className={`dark-switch ${theme.skin === 'dark' ? 'active' : ''}`} href="#" 
              onClick={(ev) => {
                ev.preventDefault();
                themeUpdate.skin(theme.skin === 'dark' ? 'light' : 'dark');
              }}>
                {theme.skin === 'dark' ? 
                  <><em className="icon ni ni-sun"></em><span>Light Mode</span></> 
                  : 
                  <><em className="icon ni ni-moon"></em><span>Dark Mode</span></>
                }
              </a>
            </li>
          </LinkList>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <a href={`${process.env.PUBLIC_URL}/auth-login`}>
              <Icon name="signout"></Icon>
              <span>Sign Out</span>
            </a>
          </LinkList>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default User;
