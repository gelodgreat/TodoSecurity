import React from 'react';
import {LogBox} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import DefaultStack from './navigator/navigator';
import {store} from './redux/store';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <DefaultStack />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
