import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  gallery: {
    marginTop: 20,
  },
  gallery__header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  gallery__type: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    height: 20,
    color: colors.white,
    marginRight: 6,
  },
  gallery__amount: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    height: 20,
    color: colors.pearlPurple,
  },
  gallery__photos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gallery__photo: {
    width: 112,
    height: 113,
    margin: 1.1,
  },
});

export default styles;
