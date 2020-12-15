import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
console. disableYellowBox = true;
export default class App  extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
          <WelcomeScreen/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8BE85',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
