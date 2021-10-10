import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  footer: {
    height: 45,
    backgroundColor: colors.sapphireBlue,
    alignItems: 'center',
  },
  footer__indicator: {
    height: 5,
    width: 134,
    marginTop: 32,
    borderRadius: 100,
    backgroundColor: colors.white,
  },
});

export default styles;
