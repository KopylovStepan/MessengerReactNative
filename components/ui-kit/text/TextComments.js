import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextComments = ({text}) => {
  return (
    <>
      <Text style={styles.textComments}>{text}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  textMenu: {
    lineHeight: 16,
    color: '#C3B8E0',
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
  },
});
export default TextComments;
