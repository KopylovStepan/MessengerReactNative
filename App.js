import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#2B2146" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.wrapper}>
          <Profile />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2B2146',
    flex: 1,
  },
});

export default App;
