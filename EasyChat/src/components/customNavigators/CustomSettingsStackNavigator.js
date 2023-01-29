import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import DrawerNavigatorStyle from '../../styles/drawerNavigator';
import UserAvatar from 'react-native-user-avatar';
import firebase from '@react-native-firebase/app';

export default CustomSettingsStackNavigator = ({props}) => {
  const user = firebase.auth().currentUser;

  return (
    <View style={DrawerNavigatorStyle.drawer}>
      <View style={DrawerNavigatorStyle.drawerBody}>
        <ImageBackground
          source={require('../../../assets/images/background.webp')}
          style={[DrawerNavigatorStyle.backgroundImage, {height: 150}]}>
          <UserAvatar size={70} name={user.displayName} />
          <Text style={DrawerNavigatorStyle.avatarName}>
            {user.displayName}
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
};
