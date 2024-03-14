import {StyleSheet} from 'react-native';
import {Constants} from '../../utils';

const {create, absoluteFillObject} = StyleSheet;
export default create({
  Center_Container: {flex: 1, justifyContent: 'space-between'},
  overlay: {
    ...absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  Image_Box: {
    width: Constants.width / 2.5,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
    marginBottom: 15,
  },
});
