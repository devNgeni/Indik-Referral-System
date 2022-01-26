import React from "react";
import {
  FriendContainer,
  FriendHeader,
  FriendTxt,
  FriendDiv,
  FriendColumn,
  FriendContent,
  Friendparagraph,
  Friendimg,
  Friendbg,
  FriendNav,
  FriendNum,
  Friendcont,
  FriendDash,
  FriendWord,
  ProfileImage,
  Profile,
  FriendSet,
  FriendOne,
  FriendTwo,
  FriendThree,
  FriendFour,
  FriendCopy,
  FriendLogo,
  Friend
} from "./FriendsElement";
import indik from "../../images/indik/indik.svg";
import hamberger from "../../images/header/hamberger.svg";
import dex from "../../images/dashbord/dex.svg";
import people from "../../images/dashbord/people.svg";
import Avatar from "@mui/material/Avatar";
import { lightBlue } from "@mui/material/colors";
import copy from "../../images/dashbord/copy.svg";
import share from "../../images/dashbord/share.svg";

function Friends(props) {
  return (
    <FriendContainer>
      <Friendbg>
        <Friend><img src={hamberger} alt="icon" height="40px" width="40px"/></Friend>
        <FriendLogo><img src={indik} alt="icon" height="60px" width="60px"/></FriendLogo>
      </Friendbg>
      <Friendimg>
        <Profile>
          <FriendDash>{props.name}John Doe</FriendDash>
          <FriendWord>{props.number}+55 9512 3456</FriendWord>
          <FriendWord>{props.email}johnDoe@gmail.com</FriendWord>
          <FriendSet>
            <FriendOne>
              <img src={dex} alt="icon" />
            </FriendOne>
            <FriendTwo>{props.profit}$182</FriendTwo>
            <FriendThree>Profit</FriendThree>
          </FriendSet>
        </Profile>
        <ProfileImage>
          <Avatar
            alt="John Doe"
            src="/static/images/avatar/1.jpg"
            sx={{ bgcolor: lightBlue[500], width: 70, height: 70 }}
          />
        </ProfileImage>
      </Friendimg>
      <Friendparagraph>
        <FriendHeader>
          <FriendTxt>
            Invite friends, get paid
            <FriendColumn>No invitation Code</FriendColumn>
          </FriendTxt>
        </FriendHeader>
        <FriendContent>
          <FriendCopy><img src={copy} alt="icon" /></FriendCopy>
          <FriendCopy><img src={share} alt="icon" /></FriendCopy>
        </FriendContent>
      </Friendparagraph>

      <FriendNum>
        <FriendNav>
          My Network
          <FriendColumn>{props.friends} friends joined under you</FriendColumn>
        </FriendNav>
        <Friendcont>
          <img src={people} alt="icons" />
        </Friendcont>
      </FriendNum>
      <FriendFour>
        <FriendDiv style={{paddingTop: "20px"}}>You Have No Friends</FriendDiv>
        <FriendDiv>Share Your Invitation Code</FriendDiv>
        <FriendDiv>And</FriendDiv>
        <FriendDiv>See Your Profit Grow</FriendDiv>
      </FriendFour>
    </FriendContainer>
  );
}

export default Friends;
