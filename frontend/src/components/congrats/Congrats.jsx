import React from "react";
import {
  CongratsContainer,
  CongratsHeader,
  CongratsBody,
  CongratsTitle,
  Congratsbg,
  Congratsimg,
  CongratsDiv,
  ServiceTwo,
} from "./CongratsElement";
import congratsbg from "../../images/congrats/congratsbg.svg";
import congratsimg from "../../images/congrats/congratsimg.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect  } from "react-router-dom";


function Congrats() {
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  // const navigate = useNavigate();
 const handleOnSubmit = () => {
    return <Redirect to="/work" />
    };
  return (
    <CongratsContainer>
      <CongratsDiv>
        <Congratsbg>
          <img src={congratsbg} alt="Congrats" />
        </Congratsbg>
        <Congratsimg>
          <img src={congratsimg} alt="Congrats" />
        </Congratsimg>
      </CongratsDiv>
      <CongratsHeader>Congratulations</CongratsHeader>
      <CongratsBody>You may now Purchase your License</CongratsBody>
      <CongratsTitle>and make Daily Profit</CongratsTitle>
      <ServiceTwo>
        <button onClick={handleOnSubmit}>Lets GO</button>
      </ServiceTwo>
    </CongratsContainer>
  );
}
export default Congrats;
