import React from "react";
import {
  Container,
  Circle,
  CircleUnder,
  CircleOver,
  TextArea,
  TextHeader,
  TextBtn,
  Registered,
  RegisterText,
} from "./SimpleElement";
import simple from "../../images/Simple/simpleh.svg";
import simplebg from "../../images/Simple/simplebg.svg";
import { Link } from "react-router-dom";

function Simple() {
  return (
    <Container>
      <Circle>
        <CircleUnder>
          <img src={simple} alt="Welcome" />
        </CircleUnder>
        <CircleOver>
          <img src={simplebg} alt="Welcome" />
        </CircleOver>
      </Circle>
      <TextHeader color="grey">it's as Simple as count to Four</TextHeader>
      <TextArea>
        We pay you to generate leads for us. then We use those leads on the
        market and profit fron them
      </TextArea>
      <TextBtn>
        <Link to="/signup">
          <button>
            Get Started
          </button>
        </Link>
      </TextBtn>
      <Registered>
        <RegisterText>
          Already Registered?
          <Link to="" style={{ color: "#00AFF0" }}>
            Signin
          </Link>
        </RegisterText>
      </Registered>
    </Container>
  );
}

export default Simple;
