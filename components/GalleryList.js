import React from 'react';
import {StyleSheet, Text, FlatList, Image} from 'react-native';

const GalleryList = props => {
  return (
    <>
      <FlatList
        contentContainerStyle={styles.gallery}
        numColumns={3}
        data={props.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <Image style={styles.gallery__photo} source={item} />;
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  gallery: {},
  gallery__photo: {
    width: 112,
    height: 113,
    margin: 1.3,
  },
});
export default GalleryList;
