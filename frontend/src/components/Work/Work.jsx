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
  WorkSpan,
  WorkImg
} from "./WorkElement";
import work from "../../images/Work/work.svg";
import { Link, Redirect } from "react-router-dom";
import workicon from "../../images/Work/workicon.svg";

function Work(props) {
  // const navigate = useNavigate();
  const handleOnSubmit = () => {
    // navigate("/pix");
    return <Redirect to="/pix"/>
  };
  return (
    <WorkContainer>
      <TableIcon>
      <WorkHeader>How It Works</WorkHeader>
      <WorkBody>
        Hello {props.name}, you are one Step closer to making money by
        generating leads with your social connections
      </WorkBody>
      <WorkText>Just Follow this Steps</WorkText>
      <WorkDiv>
        <WorkSteps>
          <WorkImg>
          <img src={work} alt="Icon" style={{ display: "grid" }} />
          </WorkImg>
          <WorkSpan>
          Purchase a Licence for $50
          </WorkSpan>
        </WorkSteps>
        <WorkSteps>
        <WorkImg>
          <img src={work} alt="Icon" />
        </WorkImg>
        <WorkSpan>
          Receive an Invitation code
          </WorkSpan>
        </WorkSteps>
        <WorkSteps>
        <WorkImg>
          <img src={work} alt="Icon" />
          </WorkImg>
          <WorkSpan>
          indik your friends and family
          </WorkSpan>
        </WorkSteps>
        <WorkSteps>
          <WorkImg>
          <img src={work} alt="Icon" />
          </WorkImg>
          <WorkSpan>
          Get $25 for each activated Invitation
          </WorkSpan>
        </WorkSteps>
        <WorkSteps>
          <WorkImg>
          <img src={work} alt="Icon" />
          </WorkImg>
          <WorkSpan>
          Invite as many People as You Can
          </WorkSpan>
        </WorkSteps>

      </WorkDiv>
      <WorkRich>GET RICH!</WorkRich>
      <ServiceTwo>
          <TableSpan>
            <button onClick={handleOnSubmit}>
              <img src={workicon} alt="icon" />
              Purchase License $50
            </button>
          </TableSpan>
      </ServiceTwo>
      </TableIcon>
    </WorkContainer>
  );
}

export default Work;
