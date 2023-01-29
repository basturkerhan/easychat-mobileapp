import React, {useState, useEffect, useRef} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import ChatRoomCard from './ChatRoomCard';
import SwipedChatRoomCard from './SwipedChatRoomCard';
import firebase from '@react-native-firebase/app';

export default ChatRoomItem = ({item, modalRef, editRoomRef}) => {
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    setIsOwner(item.userId === user.uid);
  }, []);

  return isOwner ? (
      <SwipeListView
        data={[item]}
        renderItem={data => <ChatRoomCard item={data.item} />}
        renderHiddenItem={data => (
          <SwipedChatRoomCard modalRef={modalRef} editRoomRef={editRoomRef} item={data.item} />
        )}
        rightOpenValue={-100}
      />
  ) : (
    <ChatRoomCard item={item} />
  );
};
