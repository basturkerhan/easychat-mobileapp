import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default SearchButton = ({setIsSearchBoxActive, isSearchBoxActive, searchText}) => {
  const navigation = useNavigation();

  const handleSearch = () => {
    if(isSearchBoxActive) {
      navigation.navigate('Home', {searchText: searchText});
    } else {
      setIsSearchBoxActive(true);
    }
  }

  // const support = () => {
  //   Linking.openURL('mailto:basturkerhan16@gmail.com?subject=Destek');
  // }

  return (
    <TouchableOpacity
      onPress={() => handleSearch()}
    >
      <Icon name={'search'} size={20} style={{marginRight: 15}} />
    </TouchableOpacity>
  );
};
