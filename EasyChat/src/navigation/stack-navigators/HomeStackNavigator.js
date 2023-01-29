import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatRoomDetail from '../../screens/Chat/Detail';
import ChatRoomInfo from '../../screens/Chat/Info';
import ChatRoomQRShare from '../../screens/Chat/QRShare';
import BottomTabNavigator from '../BottomTabNavigator';
import ChatHeaderRight from '../../components/headerParts/ChatHeaderRight';
import ChatHeader from '../../components/headerParts/ChatHeader';

const Stack = createStackNavigator();
export default AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatRoomDetail"
        component={ChatRoomDetail}
        options={({route}) => {
          return {
            headerTitle: () => (
              <ChatHeader name={route.params.name} id={route.params.id} />
            ),
            headerRight: () => (
              <ChatHeaderRight
                count={route.params.count ? route.params.count : 0}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name="ChatRoomInfo"
        component={ChatRoomInfo}
        options={{
            title: null,
            headerStyle: {backgroundColor: '#F5B183'},
        }}
      />
      <Stack.Screen
        name="ChatRoomQRShare"
        component={ChatRoomQRShare}
        options={{
            title: null,
            headerStyle: {backgroundColor: '#F5B183'},
        }}
      />
    </Stack.Navigator>
  );
};
