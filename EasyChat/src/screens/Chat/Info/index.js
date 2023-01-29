import React from 'react';
import ButtonStyle from '../../../styles/button';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import LayoutStyle from '../../../styles/layout';
import BackgroundColors from '../../../styles/backgroundColors';
import TextColors from '../../../styles/textColors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';

export default ChatInfo = ({route, navigation}) => {
  const handleShare = () => {
    const shareOptions = {
      title: 'Join Room',
      message: 'Hey! I am using this app. Join me in this room: ',
      url: route.params.id,
      subject: 'Join this Room', //  for email
    };
    Share.open(shareOptions);
  };

  return (
    <SafeAreaView style={[LayoutStyle.container, BackgroundColors.bgOrange]}>
      <View style={[LayoutStyle.topF1]}>
        <Text style={LayoutStyle.smallHero}>{route.params.name} Room</Text>
        <Text style={LayoutStyle.smallHeroDescription}>
          You can share this room with the ID or QR code.
        </Text>
      </View>

      <View style={[LayoutStyle.bottomF2, BackgroundColors.bgWhite]}>
        <TouchableOpacity
          onPress={() => {
            handleShare();
          }}
          style={[
            ButtonStyle.ellipsisButton,
            BackgroundColors.bgWhite,
            {
              borderColor: '#030100',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}>
          <Icon
            name={'id-card'}
            size={22}
            color="#030100"
            style={{marginRight: 5}}
          />
          <Text style={[ButtonStyle.buttonText, TextColors.black]}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChatRoomQRShare', {id: route.params.id});
          }}
          style={[
            ButtonStyle.ellipsisButton,
            BackgroundColors.bgBlack,
            {
              marginTop: 15,
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}>
          <Icon
            name={'qrcode'}
            size={22}
            color="#fdfffd"
            style={{marginRight: 5}}
          />
          <Text style={[ButtonStyle.buttonText, TextColors.fullWhite]}>
            Get QR Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
