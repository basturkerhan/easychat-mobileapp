import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CustomDrawer from '../components/customNavigators/CustomDrawer';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import SettingsStackNavigator from './stack-navigators/SettingsStackNavigator';

const Drawer = createDrawerNavigator()
export default DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent= {props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen 
        name="HomeStackNavigator" 
        component={HomeStackNavigator}
        options={{
          title: 'Home'
        }}
      />
      <Drawer.Screen 
        name="SettingsStackNavigator" 
        component={SettingsStackNavigator}
        options={{
          title: 'Settings'
        }}
      />
    </Drawer.Navigator>
  )
}