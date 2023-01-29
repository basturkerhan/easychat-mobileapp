import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatRoomItemStyle from '../../styles/chatRoomItem';
import ButtonStyle from '../../styles/button';
import BackgroundColors from '../../styles/backgroundColors';
import { batch, useDispatch } from 'react-redux';
import {setRoomName, setRoomId} from '../../store/slices/selectedRoom';

export default SwipedChatRoomCard = ({item, modalRef, editRoomRef}) => {
  const dispatch = useDispatch();

  const handleDeleteButton = () => {
    dispatch(setRoomId(item.id));
    modalRef.current.open();
  }

  const handleEditButton = () => {
    batch(() => {
      dispatch(setRoomName(item.name));
      dispatch(setRoomId(item.id));
    })
    editRoomRef.current.open();
  }

  return (
    <View style={ChatRoomItemStyle.rightSwipe}>
      <View style={ChatRoomItemStyle.iconContainer}>
        <TouchableOpacity 
          style={[ButtonStyle.swipeButton, BackgroundColors.bgGray]}
          onPress={() => handleEditButton()}>
        <Icon name={'pencil'} size={22} color="#263238" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[ButtonStyle.swipeButton, BackgroundColors.bgGray]}
          onPress={() => handleDeleteButton()}
        >
            <Icon name={'delete'} size={22} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
