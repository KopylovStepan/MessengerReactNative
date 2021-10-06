import React from 'react';
import {
  Modal,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextHeadline from '../../ui-kit/text/TextHeadline';

const ProfileMoreDetails = ({active, setActive}) => {
  console.log(active);
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
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.container}>
            <View style={styles.details}>
              <View style={styles.details__header}>
                <TextHeadline text={'Подробнее'} />
                <TouchableOpacity onPress={close}>
                  <Ionicons name="md-close" size={24} color="#8672BB" />
                </TouchableOpacity>
              </View>
              <View style={styles.details__item}>
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={24}
                  color="#FFFFFF"
                />
                <Text style={styles.details__itemText}>
                  They never ask people to do things they wouldn’t do
                  themselves.
                </Text>
              </View>
              <View style={styles.details__item}>
                <FontAwesome name="birthday-cake" size={24} color="#FFFFFF" />
                <Text style={styles.details__itemText}>
                  День рождения: 08 октября 1992
                </Text>
              </View>
              <View style={styles.details__item}>
                <Ionicons name="location-outline" size={24} color="#FFFFFF" />
                <Text style={styles.details__itemText}>
                  Город: Санкт-Петербург
                </Text>
              </View>
              <View style={styles.details__item}>
                <Ionicons
                  name="md-briefcase-outline"
                  size={24}
                  color="#FFFFFF"
                />
                <Text style={styles.details__itemText}>
                  ВГУЮ в г. Санкт-Петербург
                </Text>
              </View>
            </View>
            <View style={styles.contacts}>
              <View style={styles.contacts__header}>
                <TextHeadline text={'Контакты'} />
              </View>
              <View style={styles.details__item}>
                <MaterialCommunityIcons
                  name="arrow-top-right"
                  size={24}
                  color="#FFFFFF"
                />
                <Text style={styles.details__itemText}>http://t.me/durov</Text>
              </View>
              <View style={styles.details__item}>
                <SimpleLineIcons
                  name="social-twitter"
                  size={24}
                  color="#FFFFFF"
                />
                <Text style={styles.details__itemText}>Durov</Text>
              </View>
              <View style={styles.details__item}>
                <Ionicons name="logo-instagram" size={24} color="#FFFFFF" />
                <Text style={styles.details__itemText}>Pavel Durov</Text>
              </View>
              <View style={styles.details__item}>
                <SimpleLineIcons
                  name="social-facebook"
                  size={24}
                  color="#FFFFFF"
                />
                <Text style={styles.details__itemText}>durov</Text>
              </View>
              <View style={styles.details__item}>
                <FontAwesome name="paper-plane-o" size={24} color="#FFFFFF" />
                <Text style={styles.details__itemText}>durov</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2B2146',
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 543,
  },
  details: {
    width: 342,
    marginTop: 33,
    marginBottom: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#3B2D5F',
  },
  details__header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  details__item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  details__itemText: {
    width: 303,
    marginLeft: 12,
    lineHeight: 16,
    color: '#C3B8E0',
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
  },
  contacts: {
    width: 342,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  contacts__header: {
    marginBottom: 15,
  },
});

export default ProfileMoreDetails;
