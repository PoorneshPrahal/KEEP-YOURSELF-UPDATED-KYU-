import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.jpg";

import technology from "../../images/technology.png";
import entertainment from "../../images/entertainment.png";
import jobHunt from "../../images/jobHunt.jpg";
import science from "../../images/science.jpg";
import positiveNews from "../../images/positivenews.png";
import adv from "../../images/adv.jpg";
import environment from "../../images/environment.png";
import logout from "../../images/logout.jpg";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Sidebar component 
  return (
    <div style={{ display: "inline-block" }}>
      <CDBSidebar textColor="#000" backgroundColor="#fff">
        <CDBSidebarHeader

        >
          <a href="/" className="text-decoration-none">
            <img style={{ width: "4em" }} src={logo} alt={logo} />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink activeClassName="activeClicked">
              <Link
                to="/news"
                state={["Technology"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={technology} alt="" height={30} width={30} />
                  Technology</CDBSidebarMenuItem>
              </Link>
            </NavLink>

            <NavLink exact to="/tables" activeClassName="activeClicked">
              <Link
                to="/news"
                state={["Entertainment"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={entertainment} alt="" height={30} width={30} />
                  Entertainment
                </CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink exact to="/positivenews" activeClassName="activeClicked">
              <CDBSidebarMenuItem > <img src={positiveNews} alt="" height={30} width={30}/>Positive news</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <Link
                to="/jobs"

                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem > <img src={jobHunt} alt="" height={30} width={30}/>Job Hunt</CDBSidebarMenuItem>
              </Link>
            </NavLink>

            <NavLink exact to="/profile" activeClassName="activeClicked">
              <Link
                to="/news"
                state={["Science"]}
                style={{ textDecoration: "none", color: "black" }}
              >

                <CDBSidebarMenuItem > <img src={science} alt="" height={30} width={30}/>Science</CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink exact to="/advertise" activeClassName="activeClicked">
              <CDBSidebarMenuItem> <img src={adv} alt="" height={30} width={30} />Advertise</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="" activeClassName="activeClicked">
              <Link
                to="/news"
                state={["Sports"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem > <img src={technology} alt="" height={30} width={30}/>
                  Sports
                </CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <Link
                to="/horoscope"
                state={["Entertainment"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={entertainment} alt="" height={30} width={30} />
                  Horoscope
                </CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink exact to="" activeClassName="activeClicked">
              <Link
                to="/news"
                state={["Environment"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem > <img src={environment} alt="" height={30} width={30}/>Environment</CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <Link
                to="/bookmarks"
                state={["Entertainment"]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CDBSidebarMenuItem >
                  <img src={entertainment} alt="" height={30} width={30} />
                  Bookmarks
                </CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink exact to="" activeClassName="activeClicked">
              <CDBSidebarMenuItem > <img src={logout} alt="" height={30} width={30}/>Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
