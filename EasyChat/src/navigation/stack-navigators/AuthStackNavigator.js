import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../../screens/Auth/Landing'
import Login from '../../screens/Auth/Login'
import AuthHeaderRight from '../../components/headerParts/AuthHeaderRight'
import Register from '../../screens/Auth/Register'

const Stack = createStackNavigator()

export default AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#F5B183',
      }
    }}>
      <Stack.Screen name="Landing" 
        component={Landing}
        options={{
          headerShown: false,
        }}  
      />
      <Stack.Screen name="Login" 
        component={Login} 
        options={{
          title: null,
          headerRight: () => (<AuthHeaderRight title="Register" route="Register" />)
        }}
      />
            <Stack.Screen name="Register" 
        component={Register} 
        options={{
          title: null,
          headerRight: () => (<AuthHeaderRight title="Login" route="Login" />)
        }}
      />
    </Stack.Navigator>
  )
}