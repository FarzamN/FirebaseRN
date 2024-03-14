import {StyleSheet} from 'react-native';
import {Colors, Constants} from '../../utils';

export default StyleSheet.create({
  Container: {
    width: Constants.width - 20,
    marginTop: 10,
  },
  InputStyles: {
    width: Constants.width - 20,
    backgroundColor: Colors.Non,
    alignSelf: 'center',
    color: 'red',
    fontWeight: '500',
    fontSize: 16,
    borderRadius: 15,
  },
});
