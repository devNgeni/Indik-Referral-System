import React from "react";
import {
  DeskContainer,
  DeskHeader,
  DeskDiv,
  DeskText,
  DeskBody,
  DeskFooter,
  DeskType,
  DeskIcon,
  Desk,
  Deskimg,
  Deskbg,
  DeskSelf,
  DeskNav,
  DeskId,
  DeskH2,
  DeskH1,
  DeskCopy,
} from "./DesktopElement";
import indik from "../../images/indik/indik.svg";
import { Link } from "react-router-dom";
import circle from "../../images/WelBody/circle.svg";
import welcomeicon from "../../images/WelBody/welcomeico.svg";
import desk from "../../images/Desktop/desk.svg";
import simple from "../../images/Simple/simpleh.svg";
import simplebg from "../../images/Simple/simplebg.svg";

function DeskTop() {
  return (
    <DeskContainer>
      <DeskNav>
        <Deskimg>
          <img src={indik} alt="icon" />
        </Deskimg>
        <DeskDiv>
          <Link to="/signup">
            <button
              className="obato"
              style={{
                padding: "10px",
                borderRadius: "15px",
                border: "1px solid #00AFF0",
                color: "#00AFF0",
                backgroungColor: "white",
                width: "150px",
                fontWeight: "bold",
              }}
            >
              Sign in
            </button>
          </Link>
        </DeskDiv>
        <Desk>
          <Link to="/signup">
            <button>
              Get Started
            </button>
          </Link>
        </Desk>
      </DeskNav>
      <DeskHeader>Welcome to Indik</DeskHeader>
      <DeskText>The most affordable way to monetise your</DeskText>
      <DeskText>Social Connection</DeskText>
      <DeskSelf>
        <Link to="/signup">
          <button>
            Get Started
          </button>
        </Link>
      </DeskSelf>
      <DeskBody>
        <Deskbg>
          <img src={circle} alt="Welcome" />
        </Deskbg>
        <DeskIcon>
          <img src={welcomeicon} alt="Welcome" />
        </DeskIcon>
      </DeskBody>
      <DeskType>How It Works</DeskType>
      <DeskId>
        <DeskH2>GET 50%</DeskH2>
        <DeskH2>Profit</DeskH2>
        <DeskH1>The Only thing You need are a</DeskH1>
        <DeskH1>license and 3 friends</DeskH1>
        <img
          src={desk}
          alt="icon"
          width="300"
          height="300"
          style={{ position: "relative", top: "-180px", left: "270px" }}
        />
      </DeskId>
      <DeskFooter>
        <DeskHeader>It's as simple as count</DeskHeader>
        <DeskHeader>to Four</DeskHeader>
        <DeskText>We Pay you to generate leads for us. Then we use</DeskText>
        <DeskText>Those leads on the market and profit from them</DeskText>
      </DeskFooter>
      <DeskBody>
        <Deskbg>
          <img src={simple} alt="Welcome" />
        </Deskbg>
        <DeskIcon>
          <img src={simplebg} alt="Welcome" />
        </DeskIcon>
      </DeskBody>
      <DeskSelf>
        <Link to="/signup">
          <button>
            Get Started
          </button>
        </Link>
      </DeskSelf>
      <DeskCopy>Copyright 2021 indik.com</DeskCopy>
    </DeskContainer>
  );
}

export default DeskTop;
