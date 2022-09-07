import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import DefaultStack from './navigator/Navigator';
import {store} from './redux/store';

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
