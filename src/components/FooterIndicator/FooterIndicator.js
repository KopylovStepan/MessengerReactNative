import React from 'react';
import {View} from 'react-native';
import styles from './FooterIndicatorStyle';

const FooterIndicator = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footer__indicator}></View>
    </View>
  );
};

export default FooterIndicator;
