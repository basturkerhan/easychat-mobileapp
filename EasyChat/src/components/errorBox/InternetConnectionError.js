import React from 'react';
import {View, Text} from 'react-native';
import ErrorBoxStyle from '../../styles/errorBox';

export default InternetConnectionError = ({isConnected}) => {
  return (isConnected===false) ? (
    <View style={ErrorBoxStyle.wifiBox}>
        <Text style={ErrorBoxStyle.wifiBoxText}>Internet connection error</Text>
    </View>
  ) : null;
}
