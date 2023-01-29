import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Route from './src/Route';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {Root} from 'popup-ui';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <SafeAreaView style={{flex: 1}}>
          <AlertNotificationRoot>
            {/* <StatusBar hidden /> */}
            <Route />
          </AlertNotificationRoot>
        </SafeAreaView>
      </Root>
    </Provider>
  );
};

export default App;
