import React from 'react';
import {
  Modal,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextHeadline from '../../ui-kit/text/TextHeadline';

const ProfileMenu = ({active, setActive}) => {
  const close = () => {
    setActive(false);
  };
  return (
    <>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={active}
        onRequestClose={close}>
        <StatusBar backgroundColor="rgba(17, 13, 28, 1)" />
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.buttonShare}>
              <EvilIcons name="share-google" size={24} color="#FFFFFF" />
              <Text style={styles.buttonText}>Поделиться</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCopy}>
              <MaterialCommunityIcons
                name="file-multiple-outline"
                size={24}
                color="#FFFFFF"
              />
              <Text style={styles.buttonText}>Скопировать ссылку</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={close} style={styles.buttonClose}>
            <TextHeadline text={'Отмена'} />
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2B2146',
    width: '100%',
    height: 100,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: '#2B2146',
    height: 50,
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    height: 24,
    color: '#FFFFFF',
    fontFamily: 'HKGrotesk-SemiBold',
    fontSize: 16,
    marginLeft: 8,
  },
  buttonShare: {
    width: 342,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#3B2D5F',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonCopy: {
    width: 342,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default ProfileMenu;
