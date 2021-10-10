import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    width: 343,
    marginTop: 21,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  header__right: {
    flexDirection: 'row',
  },
  header__search: {
    marginRight: 15,
  },
  posts: {
    width: 343,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
});

export default styles;
