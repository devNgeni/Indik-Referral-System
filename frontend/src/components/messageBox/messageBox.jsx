import React from 'react';
import { MessageContainer, MessageText } from './MessageElement'
export default function MessageBox(props) {
  return (
    <MessageContainer>
    <MessageText className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </MessageText>
    </MessageContainer>
  );
}