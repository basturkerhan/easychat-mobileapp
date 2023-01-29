import React, {useState, useEffect, useCallback} from 'react';
import ChatDetailsStyle from '../../../styles/chatDetails';
import {View, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons';
import io from 'socket.io-client/dist/socket.io';
import firebase from '@react-native-firebase/app';
import {dangerToast} from '../../../helpers/alert';
import database from '@react-native-firebase/database';

const connectionConfig = {
  jsonp: false,
  reconnection: true,
  reconnectionDelay: 100,
  reconnectionAttempts: 1000,
  transports: ['websocket']
};

export default ChatScreen = ({route}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io('ws://192.168.1.57:5000', connectionConfig);
    socket.on('connect', function () {
      const roomId = route.params.id;
      socket.emit('connection-room', {roomId});

      socket.on('connection-room-view', ({count}) => {
        route.params.count = count;
      });

      database()
        .ref(`/messages/${roomId}`)
        .on('value', snapshot => {
          let messagesArray = [];
          snapshot.forEach(item => {
            const message = item.val().message;
              messagesArray.push({ ...message });
          });
          setMessages(messagesArray.reverse());
        });
    });

    return () => {
      socket.emit('leave-room', {roomId: route.params.id});
      socket.disconnect();
    };
  }, []);

  const onSend = useCallback(async (data = []) => {
    try {
      const message = { ...data[0], createdAt: Date.now() };
      const roomId = route.params.id;
      const database = firebase.database().ref(`/messages/${roomId}`);
      await database.push({roomId, message});
    } catch (error) {
      dangerToast({
        title: 'Message send failed',
        textBody: error.message,
      });
    }
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <FontAwesome
            name="send"
            style={{marginBottom: 5, marginRight: 5}}
            size={26}
            color="#FF5722"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="triangle-small-down" size={22} color="#333" />;
  };

  return (
    <GiftedChat
      style={ChatDetailsStyle.container}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: firebase.auth().currentUser.uid,
        name: firebase.auth().currentUser.displayName,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};
