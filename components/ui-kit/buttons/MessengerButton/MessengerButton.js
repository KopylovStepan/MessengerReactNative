import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const MessengerButton = ({text, show}) => {
  return (
    <>
      <TouchableOpacity onPress={show} style={styles.button}>
        <Text style={styles.buttonTxt}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 133,
    height: 36,
    borderWidth: 1,
    borderColor: '#3B2D5F',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    height: 24,
    color: '#FFFFFF',
  },
});
export default MessengerButton;
