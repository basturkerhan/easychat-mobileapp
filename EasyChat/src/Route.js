import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from './navigation/DrawerNavigator';
import AuthStackNavigator from './navigation/stack-navigators/AuthStackNavigator';
import AppStackNavigator from './navigation/stack-navigators/HomeStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default Route = () => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const RootStack = createStackNavigator();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!user ? (
          <RootStack.Screen name="Main" component={AuthStackNavigator} />
        ) : (
          <RootStack.Screen name="Main" component={DrawerNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
