import React from "react";
import {
  SideContainer,
  SideDash,
  SideText,
  SideDiv,
  SideButton,
  Side,
  SideContact,
} from "./SidebarElement";
import line from "../../images/dashbord/line.svg";
import sidebar from "../../images/sidebar/sidebar.svg";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <React.Fragment>
    <SideContainer>
      <SideButton>
        <img src={sidebar} alt="icon" width="40" />
      </SideButton>
      <SideDash>
        <Link to="/signup" style={{ textDecoration: "none", color: "#3A5168" }}>
          Sign up
        </Link>{" "}
        /{" "}
        <Link to="/login" style={{ textDecoration: "none", color: "#3A5168" }}>
          Log in
        </Link>
      </SideDash>
      <Side>
        <img src={line} alt="icon" width="100%" />
      </Side>
      <SideText>
        <Link to="/terms" style={{ textDecoration: "none", color: "#3A5168" }}>
          Terms
        </Link>{" "}
        &
        <Link
          to="/condition"
          style={{ textDecoration: "none", color: "#3A5168" }}
        >
          Condition
        </Link>
      </SideText>
      <SideDiv>
        <Link
          to="/condition"
          style={{ textDecoration: "none", color: "#3A5168" }}
        >
          Privacy Policy
        </Link>
      </SideDiv>
      <SideContact>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "#3A5168" }}
        >
          Contact Us
        </Link>
      </SideContact>
    </SideContainer>
    </React.Fragment>
  );
}

export default Sidebar;
