import React, {useState} from "react";
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
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions'

function Pop(props) {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
    return (
        <PopContainer>
            <PopButton>
                <img src={sidebar} alt="icon" width="40" onClick={() => setSidebarIsOpen(true)}/>
            </PopButton>
            <Profile>
        <PopDash>{props.name}</PopDash>
        <PopWord>{props.number}</PopWord>
        <PopWord>{props.email}</PopWord>
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
