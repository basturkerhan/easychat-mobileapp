import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CurrentUsers from '../buttons/CurrentUsers';

export default ChatHeaderRight = ({count}) => {
  return (
    <View style={{marginRight:15}}>
      <CurrentUsers count={count} />
    </View>
  );
};
