import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextDetailsInfo = ({text}) => {
  return (
    <>
      <Text style={styles.textDetailsInfo}>{text}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  textDetailsInfo: {
    lineHeight: 16,
    color: '#C3B8E0',
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
  },
});
export default TextDetailsInfo;
