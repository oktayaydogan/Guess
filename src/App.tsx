// App.tsx

import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar hidden={true} />
      <AppNavigator />
    </>
  );
};

export default App;
