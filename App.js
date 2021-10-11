import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import styles from './AppStyle';
import Profile from './src/screens/Profile/index';
import colors from './src/constants/colors';
import Home from './src/screens/Home/index';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.ultramarineBlue} />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.wrapper}>
          <Profile />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
