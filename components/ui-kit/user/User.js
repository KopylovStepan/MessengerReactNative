import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

const User = ({img, name, city}) => {
  return (
    <View style={styles.user}>
      <Image style={styles.user__avatar} source={img} />
      <View style={styles.user__info}>
        <Text style={styles.user__infoName}> {name}</Text>
        <Text style={styles.user__infoCity}> {city}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  user: {
    height: 43,
    flexDirection: 'row',
  },
  user__avatar: {
    height: 43,
    width: 43,
    borderRadius: 43 / 2,
  },
  user__info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  user__infoName: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: 'red',
    lineHeight: 16,
    marginBottom: 2,
  },
  user__infoCity: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: '#8672BB',
    lineHeight: 16,
  },
});
export default User;
