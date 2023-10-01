import 'react-native-gesture-handler';
import React from 'react';

import { HomeStackNavigator } from './src/navigation/HomeStackNavigator';
import { ThemeProvider } from './src/context/theme/ThemeContext';

const App = () => {
  return (
    <AppState>
      <HomeStackNavigator />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
