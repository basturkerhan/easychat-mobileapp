import React from 'react';
import AuthLayoutStyle from '../../styles/auth';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default AuthHeaderRight = ({title, route}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={AuthLayoutStyle.rightTextContainer}
      onPress={() => navigation.navigate(route)}>
      <Text style={AuthLayoutStyle.rightText}>{title}</Text>
    </TouchableOpacity>
  );
};
