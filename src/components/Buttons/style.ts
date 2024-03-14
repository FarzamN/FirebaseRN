import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export default StyleSheet.create({
  containerStyle: {
    // justifyContent: 'center',
    marginTop: 10,
    alignSelf: 'center',
    // height: 40,
    // overflow: 'hidden',
  },
  loading: {
    top: 2,
    fontSize: 16,
    marginLeft: 10,
    color: Colors.White,
    fontWeight: '400',
  },
  title: {
    top: 1,
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
