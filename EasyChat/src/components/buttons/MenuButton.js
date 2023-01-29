import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export default MenuButton = ({colorcode='#777'}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <Icon name={'format-list-text'} color={colorcode} size={25} style={{marginLeft: 15}} />
    </TouchableOpacity>
  );
};
