import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './ProfileGalleryStyle';

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
      <View style={styles.gallery__header}>
        <Text style={styles.gallery__type}>Фотографии </Text>
        <Text style={styles.gallery__amount}>245</Text>
      </View>
      <View style={styles.gallery__photos}>
        {dataPhoto.map((item, idx) => (
          <Image key={`${idx}`} style={styles.gallery__photo} source={item} />
        ))}
      </View>
    </View>
  );
};

export default ProfileGallery;
