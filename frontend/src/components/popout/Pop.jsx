import React from "react";
import {
  PopContainer,
  PopDash,
  PopText,
  PopDiv,
  PopButton,
  PopIt,
  PopContact,
  PopWord,
  Profile,
  PopEven
} from "./PopElement";
import line from "../../images/dashbord/line.svg";
import sidebar from "../../images/sidebar/sidebar.svg";
import { Link } from 'react-router-dom';

function Pop(props) {
    return (
        <PopContainer>
            <PopButton>
                <img src={sidebar} alt="icon" width="40"/>
            </PopButton>
            <Profile>
        <PopDash>{props.name}John Doe</PopDash>
        <PopWord>{props.number}+55 9512 3456</PopWord>
        <PopWord>{props.email}johnDoe@gmail.com</PopWord>
        </Profile>
            <PopIt><img src={line} alt="icon" width="100%" /></PopIt>
            <PopEven><Link to="/dashboard" style={{textDecoration: 'none', color: '#3A5168'}}>Dashboard</Link></PopEven>
            <PopText><Link to="/terms" style={{textDecoration: 'none', color: '#3A5168'}}>Terms</Link> &<Link to="/condition" style={{textDecoration: 'none', color: '#3A5168'}}>Condition</Link></PopText>
            <PopDiv><Link to="/condition" style={{textDecoration: 'none', color: '#3A5168'}}>Privacy Policy</Link></PopDiv>
            <PopContact><Link to="/contact" style={{textDecoration: 'none', color: '#3A5168'}}>Contact Us</Link></PopContact>
        </PopContainer>
        );
    }

export default Pop
