import {StyleSheet} from 'react-native';
import {Colors, Constants} from '../../utils';

export default StyleSheet.create({
  Container: {
    marginTop: 10,
    width: Constants.width - 20,
  },
  InputStyles: {
    fontSize: 16,
    borderRadius: 15,
    fontWeight: '500',
    alignSelf: 'center',
    width: Constants.width - 20,
    backgroundColor: Colors.Non,
  },
});
