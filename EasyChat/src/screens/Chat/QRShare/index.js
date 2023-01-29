import React from 'react';
import {View} from 'react-native';
import BackgroundColors from '../../../styles/backgroundColors';
import QRCode from 'react-native-qrcode-svg';
import LayoutStyle from '../../../styles/layout';

export default QRShare = ({route}) => {
  return (
    <View
      style={[
        BackgroundColors.bgOrange,
        LayoutStyle.container,
        LayoutStyle.alignCenter,
        LayoutStyle.justifyCenter,
      ]}>
      <QRCode
        value={route.params.id}
        size={200}
        color="#030100"
        backgroundColor="#F5B183"
      />
    </View>
  );
};
