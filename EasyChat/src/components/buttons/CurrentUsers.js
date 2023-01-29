import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ChatHeaderLeft = ({count}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon name={'account'} size={16} />
      <Text style={style.text}>{count}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
