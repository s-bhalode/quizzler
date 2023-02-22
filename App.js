import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';


const App = () => {
  return (
    <>
      {/* <View style={styles.container} > */}
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      {/* </View>     */}
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container : {
    padding: 16,
    paddingHorizontal: 16
  }
})
