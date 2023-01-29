import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import ChatRoomItemStyle from '../../styles/chatRoomItem';
import BackgroundColors from '../../styles/backgroundColors';

export default ChatRoomCard = ({item}) => {
  const navigation = useNavigation();

  const showDetails = ({id, name}) => {
    navigation.navigate('ChatRoomDetail', {id, name});
  };

  return (
    <TouchableOpacity onPress={() => showDetails(item)}>
      <View style={[ChatRoomItemStyle.roomCard, BackgroundColors.bgWhite]}>
        <View style={[ChatRoomItemStyle.roomCardPreview, BackgroundColors.bgOrange]}>
          <Icon name={'door-open'} size={30} color="#fdfffd" />
        </View>
        <View style={ChatRoomItemStyle.roomCardInfo}>
          <Text style={ChatRoomItemStyle.roomCardNameIdentifier}>
            {item.userName}
          </Text>
          <Text style={ChatRoomItemStyle.roomCardName}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};