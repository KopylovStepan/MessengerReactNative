import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const dataPhoto = [
  require('./../../../assets/img/Photo1.jpg'),
  require('./../../../assets/img/Photo2.jpg'),
  require('./../../../assets/img/Photo3.jpg'),
  require('./../../../assets/img/Photo4.jpg'),
  require('./../../../assets/img/Photo5.jpg'),
  require('./../../../assets/img/Photo6.jpg'),
  require('./../../../assets/img/Photo7.jpg'),
  require('./../../../assets/img/Photo8.jpg'),
  require('./../../../assets/img/Photo9.jpg'),
];

const ProfileGallery = () => {
  return (
    <View style={styles.gallery}>
      <View style={styles.gallery__info}>
        <Text style={styles.gallery__infoType}>Фотографии </Text>
        <Text style={styles.gallery__infoCount}>245</Text>
      </View>
      <View style={styles.gallery__photos}>
        {dataPhoto.map((item, idx) => (
          <Image
            key={`${idx}`}
            style={styles.gallery__photosItem}
            source={item}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gallery: {
    marginTop: 20,
  },
  gallery__info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  gallery__infoType: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    height: 20,
    color: '#FFFFFF',
    marginRight: 6,
  },
  gallery__infoCount: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    height: 20,
    color: '#8672BB',
  },
  gallery__photos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gallery__photosItem: {
    width: 112,
    height: 113,
    margin: 1.1,
  },
});

export default ProfileGallery;
