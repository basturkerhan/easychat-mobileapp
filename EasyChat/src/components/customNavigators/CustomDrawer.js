import React from 'react';
import DrawerNavigatorStyle from '../../styles/drawerNavigator';
import UserAvatar from 'react-native-user-avatar';

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default CustomDrawer = props => {
  const user = firebase.auth().currentUser;

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        props.navigation.navigate('Main');
      });
  };

  return (
    <View style={[DrawerNavigatorStyle.drawer, {flex: 1}]}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={DrawerNavigatorStyle.drawerBody}>
        <ImageBackground
          source={require('../../../assets/images/background.webp')}
          style={[DrawerNavigatorStyle.backgroundImage, {height: 150}]}>
          {/* <Image
            source={require('../../../assets/images/user-profile.jpg')}
            style={DrawerNavigatorStyle.avatarImage}
          /> */}
          <UserAvatar size={60} name={user.displayName} />
          <Text style={DrawerNavigatorStyle.avatarName}>
            {user.displayName}
          </Text>
        </ImageBackground>
        <View style={DrawerNavigatorStyle.itemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={DrawerNavigatorStyle.signoutWrapper}>
        <TouchableOpacity
          onPress={() => {
            handleSignOut();
          }}
          style={DrawerNavigatorStyle.signoutContainer}>
          <View style={DrawerNavigatorStyle.signoutInner}>
            <Icon name={'sign-out'} size={22} />
            <Text style={DrawerNavigatorStyle.signoutText}>Sign out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
