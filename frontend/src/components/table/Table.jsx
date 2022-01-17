import React from "react";
import {
  TableContainer,
  TableHeader,
  TableTxt,
  TableDiv,
  TableColumn,
  TableContent,
  Tableparagraph,
  TableSpan,
  Tableimg,
  Tablebg,
  TableNav,
  TableNum,
  Tablecont,
  TableRow,
  TableCore,
  TableCol,
  TableTable,
  TableTab,
  TableDash,
  TableWord,
  ProfileImage,
  Profile,
  TableContext,
  TableLine,
  TableLib,
  ServiceTwo,
  TableIcon,
  TableSet,
  TableOne,
  TableTwo,
  TableThree,
} from "./TableElement";
import { Link } from "react-router-dom";
import indik from "../../images/indik/indik.svg";
import hamberger from "../../images/header/hamberger.svg";
import dex from "../../images/dashbord/dex.svg";
import QRpix from "../../images/dashbord/QRpix.svg";
import people from "../../images/dashbord/people.svg";
import Avatar from "@mui/material/Avatar";
import { lightBlue } from "@mui/material/colors";
import workicon from "../../images/Work/workicon.svg";

function Table(props) {
  return (
    <TableContainer>
      <Tablebg>
        <img src={hamberger} alt="icon" />
        <img src={indik} alt="icon" />
      </Tablebg>
      <Tableimg>
        <Profile>
          <TableDash>{props.name}John Doe</TableDash>
          <TableWord>{props.number}+55 9512 3456</TableWord>
          <TableWord>{props.email}johnDoe@gmail.com</TableWord>
          <TableSet>
            <TableOne>
              <img src={dex} alt="icon" />
            </TableOne>
            <TableTwo>{props.profit}$182</TableTwo>
            <TableThree>Profit</TableThree>
          </TableSet>
        </Profile>
        <ProfileImage>
          <Avatar
            alt="John Doe"
            src="/static/images/avatar/1.jpg"
            sx={{ bgcolor: lightBlue[500], width: 70, height: 70 }}
          />
        </ProfileImage>
      </Tableimg>
      <Tableparagraph>
        <TableHeader>
          <TableTxt>
            Invite friends, get paid
            <TableColumn>No invitation Code</TableColumn>
          </TableTxt>
        </TableHeader>
        <TableContent>
          <img src={QRpix} alt="" />
        </TableContent>
      </Tableparagraph>
      <TableContext>
        <TableLine>Your Licence Expired!</TableLine>
        <TableLib>Please renew your Licence to get invitation Code</TableLib>
        <ServiceTwo>
          <Link
            to="/signup"
            style={{
              display: "inline-flex",
              backgroundColor: "rgb(0,175,240)",
              borderRadius: "15px",
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
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                Purchase License $50
              </button>
            </TableSpan>
          </Link>
        </ServiceTwo>
      </TableContext>
      <TableNum>
        <TableNav>
          My Network
          <TableColumn>{props.friends} friends joined under you</TableColumn>
        </TableNav>
        <Tablecont>
          <img src={people} alt="icons" />
        </Tablecont>
      </TableNum>
      <TableDiv>
        <TableRow>
          <TableCore>Name</TableCore>
          <TableCore>Connection Level</TableCore>
          <TableCore>Total Profit</TableCore>
        </TableRow>
        <TableCol>
          <TableTable>{props.name}John Doe</TableTable>
          <TableTable>{props.number}1</TableTable>
          <TableTab>{props.profit}$25</TableTab>
        </TableCol>
        <TableCol>
          <TableTable>{props.name}John Doe</TableTable>
          <TableTable>{props.number}1</TableTable>
          <TableTab>{props.profit}$25</TableTab>
        </TableCol>
        <TableCol>
          <TableTable>{props.name}John Doe</TableTable>
          <TableTable>{props.number}1</TableTable>
          <TableTab>{props.profit}$25</TableTab>
        </TableCol>
        <TableCol>
          <TableTable>{props.name}John Doe</TableTable>
          <TableTable>{props.number}1</TableTable>
          <TableTab>{props.profit}$25</TableTab>
        </TableCol>
        <TableCol>
          <TableTable>{props.name}John Doe</TableTable>
          <TableTable>{props.number}1</TableTable>
          <TableTab>{props.profit}$25</TableTab>
        </TableCol>
        <TableCol>
          <TableTable>{props.name}John Doe</TableTable>
          <TableTable>{props.number}1</TableTable>
          <TableTab>{props.profit}$25</TableTab>
        </TableCol>
        <TableCol>
          <TableTable>{props.name}John Doe</TableTable>
          <TableTable>{props.number}1</TableTable>
          <TableTab>{props.profit}$25</TableTab>
        </TableCol>
        <TableCol>
          <TableTable>{props.name}John Doe</TableTable>
          <TableTable>{props.number}1</TableTable>
          <TableTab>{props.profit}$25</TableTab>
        </TableCol>
      </TableDiv>
    </TableContainer>
  );
}

export default Table;
