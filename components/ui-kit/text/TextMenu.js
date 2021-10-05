import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextMenu = ({text}) => {
  return (
    <>
      <Text style={styles.textMenu}>{text}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  textMenu: {
    lineHeight: 16,
    color: '#FFFFFF',
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
  },
});
export default TextMenu;
