import React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MessengerButton from './../../components/ui-kit/buttons/MessengerButton/MessengerButton';
import ProfileGallery from './ProfileGallery/ProfileGallery';
import ProfileMoreDetails from './ProfileMoreDetails/ProfileMoreDetails';
import ProfileMenu from './ProfileMenu/ProfileMenu';

const Profile = () => {
  const [modalProfileDetails, setModalProfileDetails] = useState(false);
  const [modalProfileMenu, setModalProfileMenu] = useState(false);
  const showProfileMenu = () => {
    setModalProfileMenu(true);
  };
  const showProfileMoreDetails = () => {
    setModalProfileDetails(true);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.head}>
            <AntDesign name="arrowleft" size={25} color="#FFFFFF" />
            <TouchableOpacity onPress={showProfileMenu}>
              <Entypo name="dots-three-horizontal" size={25} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.info__avatar}
              source={require('./../../assets/img/Avatar.png')}
            />
            <Text style={styles.info__name}>Kat Williams</Text>
            <Text style={styles.info__inst}>@Williams</Text>
            <Text style={styles.info__location}>Россия, Санкт-Петербург</Text>
            <Text style={styles.info__job}>
              Место работы: Artist by Passion!
            </Text>
          </View>
          <View style={styles.socialPanel}>
            <View style={styles.socialPanel__item}>
              <Text style={styles.socialPanel__itemCount}>2,467</Text>
              <Text style={styles.socialPanel__itemInfo}>Followers</Text>
            </View>
            <View style={styles.socialPanel__item}>
              <Text style={styles.socialPanel__itemCount}>1,589</Text>
              <Text style={styles.socialPanel__itemInfo}>Following</Text>
            </View>
            <MessengerButton show={showProfileMoreDetails} text={'Подробнее'} />
          </View>
          <ProfileGallery />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footer__indicator}></View>
      </View>
      <ProfileMoreDetails
        active={modalProfileDetails}
        setActive={setModalProfileDetails}
      />
      <ProfileMenu active={modalProfileMenu} setActive={setModalProfileMenu} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    marginTop: 21,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -15,
    marginBottom: 24,
  },
  info__avatar: {
    borderRadius: 95 / 2,
    height: 95,
    width: 95,
  },
  info__name: {
    marginTop: 17,
    marginBottom: 6,
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    color: '#ECEBED',
    lineHeight: 16,
  },
  info__inst: {
    marginBottom: 29,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: '#8672BB',
    lineHeight: 16,
  },
  info__location: {
    marginBottom: 8,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    color: '#8672BB',
    lineHeight: 16,
  },
  info__job: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  socialPanel: {
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#3B2D5F',
  },
  socialPanel__item: {
    width: 61,
    height: 36,
  },
  socialPanel__itemInfo: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#8672BB',
  },
  socialPanel__itemCount: {
    fontFamily: 'HKGrotesk-SemiBold',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  footer: {
    height: 45,
    backgroundColor: '#201736',
    alignItems: 'center',
  },
  footer__indicator: {
    height: 5,
    width: 134,
    marginTop: 32,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
  },
});

export default Profile;
