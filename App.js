import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ColorPrimary } from './src/utils/constanta';
import Route from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={ColorPrimary} />
        <Route />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
