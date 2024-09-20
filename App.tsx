import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/pages/home';
import theme from './src/global/styles/theme';
import {useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
  <ThemeProvider theme={theme}>
    <Home/>
  </ThemeProvider>
  );
}

export default App;