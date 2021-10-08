import React from 'react';
import {useState} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './ProfileStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MessengerButton from './../../components/ui-kit/buttons/MessengerButton/index';
import ProfileGallery from './../../components/ProfileGallery/index';
import ProfileMoreDetails from './../../components/ProfileMoreDetails/index';
import ProfileMenu from './../../components/ProfileMenu/index';
import colors from './../../../assets/colors';

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
          <View style={styles.header}>
            <AntDesign name="arrowleft" size={25} color={colors.white} />
            <TouchableOpacity onPress={showProfileMenu}>
              <Entypo
                name="dots-three-horizontal"
                size={25}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.info__avatar}
              source={require('./../../../assets/img/Avatar.png')}
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
              <Text style={styles.socialPanel__amount}>2,467</Text>
              <Text style={styles.socialPanel__info}>Followers</Text>
            </View>
            <View style={styles.socialPanel__item}>
              <Text style={styles.socialPanel__amount}>1,589</Text>
              <Text style={styles.socialPanel__info}>Following</Text>
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

export default Profile;
