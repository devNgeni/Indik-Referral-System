import React, { useState } from "react";
import { Container, Header, Div, SidebarText } from "./NavbarElement";
import indik from "../../images/header/indik.svg";
import hamberger from "../../images/header/hamberger.svg";
import { Link } from "react-router-dom";
import { SidebarData } from "../sidebarData/SidebarData";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Container id="outer-container">
      <Div id="page-wrap">
        <img
          src={hamberger}
          alt="menu-icon"
          width="24px"
          onClick={showSidebar}
        />
      </Div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
    
                  <SidebarText style={{fontWeight: "bold"}}>{item.title}</SidebarText>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Header>
        <img src={indik} alt="Logo" width="180px" />
      </Header>
    </Container>
  );
}
export default Navbar;
