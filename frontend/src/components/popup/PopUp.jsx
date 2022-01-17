import React, { useState } from "react";
import { PopupContainer, PopupRow, PopUpHeader, PopupButton, PopupFooter } from "./PopupElement";
import Slide from  'react-reveal/Slide'
import { Link } from "react-router-dom";

function PopUp() {
  const PopUp = (props) => {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }, [show]);
    if (!show) return null;

    return props.trigger ? (
      <>
        <PopupContainer>
            <Slide up>
          <PopupRow>{props.name}</PopupRow>
          </Slide>
          <PopUpHeader>
              The invitation Code You have Entered
              belongs to {props.name}. shall we
              Proceed?
          </PopUpHeader>
          <PopupButton onclick={() => props.setTrigger(false)}>
              Confirm
              </PopupButton>
              <PopupFooter>
                  <Link>
                  Go Back
                  </Link>
              </PopupFooter>
        </PopupContainer>
        
      </>
    ) : (
      ""
    );
  };
}
export default PopUp;
