import React from 'react';

import RoomItem from '../RoomItem';

import { Scroll } from './styles';

interface IData {
  id: string;
  name: string;
  bio: string;
}

const rooms: IData[] = [
  {id: '1234', name: 'Sala 1234', bio: 'Primeira mensagem de teste no chat-app Primeira mensagem de teste no chat-appPrimeira mensagem de teste no chat-app'},
  {id: '1235', name: 'Sala 1235', bio: 'Primeira mensagem de teste no chat-app Primeira mensagem de teste no chat-appPrimeira mensagem de teste no chat-app'},
  {id: '1236', name: 'Sala 1236', bio: 'Primeira mensagem de teste no chat-app Primeira mensagem de teste no chat-appPrimeira mensagem de teste no chat-app'},
  {id: '1237', name: 'Sala 1237', bio: 'Primeira mensagem de teste no chat-app Primeira mensagem de teste no chat-appPrimeira mensagem de teste no chat-app'},
  {id: '1238', name: 'Sala 1238', bio: 'Primeira mensagem de teste no chat-app Primeira mensagem de teste no chat-appPrimeira mensagem de teste no chat-app'},
  {id: '1239', name: 'Sala 1239', bio: 'Primeira mensagem de teste no chat-app Primeira mensagem de teste no chat-appPrimeira mensagem de teste no chat-app'},
  {id: '1240', name: 'Sala 1240', bio: 'Primeira mensagem de teste no chat-app Primeira mensagem de teste no chat-appPrimeira mensagem de teste no chat-app'},
  {id: '1241', name: 'Sala 1241', bio: 'Primeira mensagem de teste no chat-app Primeira mensagem de teste no chat-appPrimeira mensagem de teste no chat-app'},
];

function renderRooms(data: IData[]) {
  return data.map(item => {
    return <RoomItem key={item.id} data={item} />
  });
}

function RoomList() {
  return (
    <Scroll>
      {renderRooms(rooms)}
    </Scroll>
  );
}

export default RoomList;
