import React from 'react';

import Message from '../Message';

import { Scroll } from './styles';

const msgs = [
  {id: '1', right: true, content: 'dkjasdas das asdasdasdasda asas as a dasdasdasdas'},
  {id: '2', right: true, content: '😁😁😎'},
  {id: '3', right: false, content: 'sdasdasdsd as asasdasdad'},
  {id: '4', right: false, content: 'sasdasda asdasdasdasd asdasdasdasdasd sa asdasdasd asdasd asdasdasdasd sasdasda asdasdasdasd asdasdasdasdasd sa asdasdasd asdasd asdasdasdasd'},
  {id: '5', right: true, content: 'dasdsd'},
  {id: '6', right: false, content: 'aa'},
  {id: '7', right: false, content: 'fdlkvofdv 45454545'},
  {id: '8', right: true, content: '!!!!'},
];

function MessageList() {
  function renderMessages() {
    return msgs.map(msg => {
      return <Message key={msg.id} data={msg} />
    });
  }

  return (
    <Scroll>
      {renderMessages()}
    </Scroll>
  );
}

export default MessageList;
