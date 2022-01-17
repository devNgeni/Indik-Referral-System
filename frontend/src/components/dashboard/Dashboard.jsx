import React from "react";
import {
  DashboardContainer,
  DashboardHeader,
  DashboardTxt,
  DashboardDiv,
  DashboardColumn,
  DashboardContent,
  Dashboardparagraph,
  DashboardSpan,
  Dashboardimg,
  Dashboardbg,
  DashboardNav,
  DashboardNum,
  Dashboardcont,
  DashboardRow,
  DashboardCore,
  DashboardCol,
  DashboardTable,
  DashboardTab

} from "./DashboardElement";
import indik from "../../images/indik/indik.svg";
import hamberger from "../../images/header/hamberger.svg";
import dex from "../../images/dashbord/dex.svg";
import QR from "../../images/dashbord/QR.svg";
import copy from "../../images/dashbord/copy.svg";
import share from "../../images/dashbord/share.svg";
import line from "../../images/dashbord/line.svg";
import people from "../../images/dashbord/people.svg";




function Dashboard(props) {
  return (
    <DashboardContainer>
      <Dashboardbg>
        <img src={hamberger} alt="icon" />
        <img src={indik} alt="icon" />
      </Dashboardbg>
      <Dashboardimg>
        <img src={dex} alt="icon" style={{ paddingTop: "100px" }} />
      </Dashboardimg>
      <Dashboardparagraph>
        <DashboardHeader>
          <DashboardSpan>
            <img src={QR} alt="icon" />
          </DashboardSpan>
          <DashboardTxt>
            Invite friends, get paid
            <DashboardColumn>share this code {props.code}</DashboardColumn>
          </DashboardTxt>
        </DashboardHeader>
        <DashboardContent>
          <img src={copy} alt="icon" />
          <img src={share} alt="" />
        </DashboardContent>
      </Dashboardparagraph>
      <img src={line} alt="line" style={{width: '100%'}}/>
      <DashboardNum>
          <DashboardNav>
          My Network
        <DashboardColumn>{props.friends} friends joined under you</DashboardColumn>
      </DashboardNav>
      <Dashboardcont>
          <img src={people} alt="icons" />
      </Dashboardcont>
      </DashboardNum>
      <DashboardDiv>
      <DashboardRow>
      <DashboardCore>Name</DashboardCore>
      <DashboardCore>Connection Level</DashboardCore>
      <DashboardCore>Total Profit</DashboardCore>
      </DashboardRow>
      <DashboardCol>
          <DashboardTable>{props.name}John Doe</DashboardTable>
          <DashboardTable>{props.number}1</DashboardTable>
          <DashboardTab>{props.profit}$25</DashboardTab>
      </DashboardCol>
      <DashboardCol>
          <DashboardTable>{props.name}John Doe</DashboardTable>
          <DashboardTable>{props.number}1</DashboardTable>
          <DashboardTab>{props.profit}$25</DashboardTab>
      </DashboardCol>
      <DashboardCol>
          <DashboardTable>{props.name}John Doe</DashboardTable>
          <DashboardTable>{props.number}1</DashboardTable>
          <DashboardTab>{props.profit}$25</DashboardTab>
      </DashboardCol>
      <DashboardCol>
          <DashboardTable>{props.name}John Doe</DashboardTable>
          <DashboardTable>{props.number}1</DashboardTable>
          <DashboardTab>{props.profit}$25</DashboardTab>
      </DashboardCol>
      <DashboardCol>
          <DashboardTable>{props.name}John Doe</DashboardTable>
          <DashboardTable>{props.number}1</DashboardTable>
          <DashboardTab>{props.profit}$25</DashboardTab>
      </DashboardCol>
      <DashboardCol>
          <DashboardTable>{props.name}John Doe</DashboardTable>
          <DashboardTable>{props.number}1</DashboardTable>
          <DashboardTab>{props.profit}$25</DashboardTab>
      </DashboardCol>
      <DashboardCol>
          <DashboardTable>{props.name}John Doe</DashboardTable>
          <DashboardTable>{props.number}1</DashboardTable>
          <DashboardTab>{props.profit}$25</DashboardTab>
      </DashboardCol>
      <DashboardCol>
          <DashboardTable>{props.name}John Doe</DashboardTable>
          <DashboardTable>{props.number}1</DashboardTable>
          <DashboardTab>{props.profit}$25</DashboardTab>
      </DashboardCol>
      </DashboardDiv>
    </DashboardContainer>
  );
}

export default Dashboard;
