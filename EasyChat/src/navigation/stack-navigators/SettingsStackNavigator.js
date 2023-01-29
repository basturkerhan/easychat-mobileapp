import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ShowDrawer from '../../components/buttons/MenuButton';
import Settings from '../../screens/Settings';
import CustomSettingsStackNavigator from '../../components/customNavigators/CustomSettingsStackNavigator';

const Stack = createStackNavigator()
export default SettingsStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            header: props => <CustomSettingsStackNavigator {...props} />
        }}
    >
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
            title: 'Settings'
        }}
      />
    </Stack.Navigator>
  )
}