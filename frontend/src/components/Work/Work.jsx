import React from "react";
import {
  WorkContainer,
  WorkHeader,
  WorkBody,
  WorkText,
  WorkDiv,
  ServiceTwo,
  WorkSteps,
  WorkRich,
  TableIcon,
  TableSpan,
} from "./WorkElement";
import work from "../../images/Work/work.svg";
import { Link } from "react-router-dom";
import workicon from "../../images/Work/workicon.svg";

function Work(props) {
  return (
    <WorkContainer>
      <WorkHeader>How It Works</WorkHeader>
      <WorkBody>
        Hello {props.name}, you are one Step closer to making money by
        generating leads with your social connections
      </WorkBody>
      <WorkText>Just Follow this Steps</WorkText>
      <WorkDiv>
        <WorkSteps>
          <img src={work} alt="Icon" style={{ display: "grid" }} />
          Purchase a Licence for $50
        </WorkSteps>
        <WorkSteps>
          <img src={work} alt="Icon" />
          Receive an Invitation code
        </WorkSteps>
        <WorkSteps>
          <img src={work} alt="Icon" />
          indik your friends and family
        </WorkSteps>
        <WorkSteps>
          <img src={work} alt="Icon" />
          Get $25 for each activated Invitation
        </WorkSteps>
        <WorkSteps>
          <img src={work} alt="Icon" />
          Indik as Many people as you want
        </WorkSteps>
      </WorkDiv>
      <WorkRich>GET RICH!</WorkRich>
      <ServiceTwo>
        <Link
          to="/Pix"
          style={{
            display: "inline-flex",
            backgroundColor: "rgb(0,175,240)",
            borderRadius: "15px",
            textAlignLast: "start",
          }}
        >
          <TableIcon>
            <img src={workicon} alt="icon" />
          </TableIcon>
          <TableSpan>
            <button
              className="obato"
              style={{
                color: "white",
                backgroundColor: "#00aff0",
                border: "none",
                padding: "10px",
                borderRadius: "20px",
                width: "200px",
                fontWeight: "bold",
              }}
            >
              Purchase License $50
            </button>
          </TableSpan>
        </Link>
      </ServiceTwo>
    </WorkContainer>
  );
}

export default Work;
