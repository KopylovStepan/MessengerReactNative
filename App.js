import React from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  VirtualizedList,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GridList from './components/GalleryList';
import MessengerButton from './components/ui-kit/buttons/MessengerButton/MessengerButton';

const dataPhoto = [
  require('./assets/img/Photo1.jpg'),
  require('./assets/img/Photo2.jpg'),
  require('./assets/img/Photo3.jpg'),
  require('./assets/img/Photo4.jpg'),
  require('./assets/img/Photo5.jpg'),
  require('./assets/img/Photo6.jpg'),
  require('./assets/img/Photo7.jpg'),
  require('./assets/img/Photo8.jpg'),
  require('./assets/img/Photo9.jpg'),
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#2B2146" />
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.head}>
              <AntDesign name="arrowleft" size={25} color="#FFFFFF" />
              <Entypo name="dots-three-horizontal" size={25} color="#FFFFFF" />
            </View>
            <View style={styles.info}>
              <Image
                style={styles.info__avatar}
                source={require('./assets/img/Avatar.png')}
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
              <MessengerButton text={'Подробнее'} />
            </View>
            <View style={styles.gallery}>
              <View style={styles.gallery__info}>
                <Text style={styles.gallery__infoType}>Фотографии </Text>
                <Text style={styles.gallery__infoCount}>245</Text>
              </View>
              <GridList items={dataPhoto} />
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2B2146',
    flex: 1,
  },
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
    marginTop: 24,
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
  footer: {
    height: 45,
    backgroundColor: '#201736',
  },
});

export default App;
