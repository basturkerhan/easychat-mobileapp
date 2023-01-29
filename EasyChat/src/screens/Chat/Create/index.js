import React, {useRef} from 'react';
import FormStyle from '../../../styles/form';
import ButtonStyle from '../../../styles/button';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import CreateRoomRBSheet from '../../../components/bottomSheets/CreateRoomRBSheet';
import JoinRoomRBSheet from '../../../components/bottomSheets/JoinRoomRBSheet';
import LayoutStyle from '../../../styles/layout';
import CreateChatStyle from '../../../styles/createChat';
import BackgroundColors from '../../../styles/backgroundColors';
import TextColors from '../../../styles/textColors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default CreateChatRoom = () => {
  const createRoomRef = useRef(null);
  const joinRoomRef = useRef(null);

  return (
    <SafeAreaView
      style={[LayoutStyle.container, BackgroundColors.bgOrange]}>
      <CreateRoomRBSheet createRoomRef={createRoomRef} />
      <JoinRoomRBSheet joinRoomRef={joinRoomRef} />

      <View style={[LayoutStyle.topF1, LayoutStyle.justifyStart]}>
        <Text style={LayoutStyle.smallHero}>Rooms</Text>
        <Text style={LayoutStyle.smallHeroDescription}>
          You can join the room with the ID or QR code or create a new room.
        </Text>
      </View>

      <View style={[LayoutStyle.bottomF2, BackgroundColors.bgWhite]}>
        <Text style={[TextColors.orange, LayoutStyle.xsmallHero]}>Join the room with</Text>
        <View style={CreateChatStyle.joinContainer}>
          <TouchableOpacity
            onPress={() => joinRoomRef.current.open()}
            style={[
              ButtonStyle.button,
              BackgroundColors.bgFullWhite,
              {borderColor: 'rgba(245, 177, 131,0.85)', borderWidth: 1, flexDirection: 'row', alignItems: 'center'},
            ]}>
            <Icon name={'id-card'} size={22} color='#F5B183' style={{marginRight: 5}} />
            <Text style={[ButtonStyle.buttonText, TextColors.orange]}>
              Room ID
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[
              ButtonStyle.button,
              BackgroundColors.bgFullWhite,
              {borderColor: 'rgba(245, 177, 131,0.85)', borderWidth: 1, flexDirection: 'row', alignItems: 'center'},
            ]}>
            <Icon name={'qrcode'} size={22} color='#F5B183' style={{marginRight: 5}} />
            <Text style={[ButtonStyle.buttonText, TextColors.orange]}>
              QR Code
            </Text>
          </TouchableOpacity>
        </View>

        <View style={CreateChatStyle.createContainer}>
        <Text style={[TextColors.orange, LayoutStyle.xsmallHero]}>Or</Text>
          <TouchableOpacity
            onPress={() => createRoomRef.current.open()}
            style={[
              ButtonStyle.ellipsisButton,
              BackgroundColors.bgOrange,
              {marginTop: 15, flexDirection: 'row', alignItems: 'center'},
            ]}>
            <Icon name={'plus'} size={25} color='#fff' style={{marginRight: 5}} />
            <Text style={[ButtonStyle.buttonText, TextColors.fullWhite]}>
              Create Room
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
