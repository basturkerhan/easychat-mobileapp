import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import CreateChatRoom from '../screens/Chat/Create';
import MenuButton from '../components/buttons/MenuButton';
import SearchButton from '../components/buttons/SearchButton';
import Searchbox from '../components/headerParts/Searchbox';
import BackButton from '../components/buttons/BackButton';

const Tab = createBottomTabNavigator();
export default BottomTabNavigator = () => {
  const [isSearchBoxActive, setIsSearchBoxActive] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerLeft: () => <MenuButton />,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'CreateChatRoom') {
            iconName = focused ? 'door-open' : 'door';
          }
          return <Icon name={iconName} size={34} color={color} />;
        },
        tabBarActiveTintColor: '#F5B183',
        tabBarInactiveTintColor: '#BEBEBE',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fdfffd'
        }
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: null,
          headerTitle: (isSearchBoxActive) ? () => <Searchbox searchText={searchText} setSearchText={setSearchText} /> : null,
          headerRight: () => <SearchButton searchText={searchText} setIsSearchBoxActive={setIsSearchBoxActive} isSearchBoxActive={isSearchBoxActive} />,
          headerLeft: () => (isSearchBoxActive 
            ? <BackButton setIsSearchBoxActive={setIsSearchBoxActive} />
            : <MenuButton />)
        }}
      />
      <Tab.Screen
        name="CreateChatRoom"
        component={CreateChatRoom}
        options={{
          title: null,
          headerStyle: {backgroundColor: '#F5B183'},
        }}
      />
    </Tab.Navigator>
  );
};
