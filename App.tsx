/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ProductListScreen from './src/components/ProductListScreen';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ProductListScreen />
    </SafeAreaView>
  );
}

export default App;
