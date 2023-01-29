import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

export default Searchbox = ({searchText, setSearchText}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
      <View>
        <TextInput
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          placeholder="text..."
          placeholderTextColor={'#302D4C'}
        />
      </View>
    </View>
  );
};
