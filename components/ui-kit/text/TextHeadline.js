import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextHeadline = ({text}) => {
  return (
    <>
      <Text style={styles.textHeadline}>{text}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  textHeadline: {
    lineHeight: 16,
    color: '#FFFFFF',
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
  },
});
export default TextHeadline;
