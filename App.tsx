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
  StyleSheet,
  useColorScheme,
  Text,
  View,
  ViewStyle
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import Landing from './intents/LandingIntent';




function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style = {styles.conatinerStyle}>
      <Landing/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // bgColor: {
  //   backgroundColor: '#34006a',
  // } as ViewStyle,
  conatinerStyle: {
    backgroundColor: '#34006a',
    padding: 4,
    height: '100%',
  }
  
})
export default App;
