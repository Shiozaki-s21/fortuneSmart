import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

//Screen
import Home from './components/Home';
import DoFortune from './components/DoFortune';

//resources


const AppNavigator = createStackNavigator(
  {
    HomeScreen: Home,
    DoFortuneScreen: DoFortune,
  },
  {
    headerMode: 'none',
  },
);

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default createAppContainer(AppNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
