/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { BottomNavigator } from './src/BottomNavigator/BottomNavigator';

const App: () => Node = () => {

  return (
    <BottomNavigator />
  )
};

export default App;
