import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export default BackButton = ({setIsSearchBoxActive}) => {

  return (
    <TouchableOpacity
      onPress={() => setIsSearchBoxActive(false)}>
      <Icon name={'arrow-left'} size={25} style={{marginLeft: 15}} />
    </TouchableOpacity>
  );
};
