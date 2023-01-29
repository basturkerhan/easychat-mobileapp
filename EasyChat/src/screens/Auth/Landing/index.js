import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import LandingStyle from '../../../styles/landing';
import LayoutStyle from '../../../styles/layout';
import BackgroundColors from '../../../styles/backgroundColors';
import ButtonStyle from '../../../styles/button';
import TextColors from '../../../styles/textColors';

export default Landing = ({navigation}) => {
  return (
    <View style={[LayoutStyle.container, BackgroundColors.bgWhite]}>
      <View style={[LayoutStyle.topF2, LayoutStyle.alignCenter, LayoutStyle.justifyCenter,  BackgroundColors.bgWhite]}>
        <Image
          source={require('../../../../assets/images/chat.png')}
          style={LandingStyle.logo}
        />
        <Text style={LayoutStyle.bigHero}>easychat</Text>
        <Text style={LayoutStyle.bigHeroDescription}>chatapp</Text>
      </View>

      <View style={[LayoutStyle.bottomF1, BackgroundColors.bgOrange]}>
        <Text style={LayoutStyle.smallHero}>Welcome</Text>
        <Text style={LayoutStyle.smallHeroDescription}>Join our platform, create or join a room and EasyChat!</Text>
        <View style={LandingStyle.bottomButtons}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={[ButtonStyle.ellipsisButton, BackgroundColors.bgBlack]}>
            <Text style={[ButtonStyle.buttonText, TextColors.white]}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={[ButtonStyle.ellipsisButton, BackgroundColors.bgWhite]}>
            <Text style={[ButtonStyle.buttonText, TextColors.black]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
