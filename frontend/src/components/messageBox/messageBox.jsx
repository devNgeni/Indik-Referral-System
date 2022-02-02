import React from 'react';
import { MessageText } from './MessageElement'
export default function MessageBox(props) {
  return (
    <MessageText className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </MessageText>
  );
}