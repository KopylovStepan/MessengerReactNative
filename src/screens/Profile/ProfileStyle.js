import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 343,
    marginTop: 21,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  header: {
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
    color: colors.lavender,
  },
  info__inst: {
    marginBottom: 29,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.pearlPurple,
  },
  info__location: {
    marginBottom: 8,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    color: colors.pearlPurple,
  },
  info__job: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    color: colors.white,
  },
  socialPanel: {
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.moderatePurplishBlue,
  },
  socialPanel__item: {
    width: 61,
    height: 36,
  },
  socialPanel__info: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: colors.pearlPurple,
  },
  socialPanel__amount: {
    fontFamily: 'HKGrotesk-SemiBold',
    fontSize: 14,
    color: colors.white,
  },
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
