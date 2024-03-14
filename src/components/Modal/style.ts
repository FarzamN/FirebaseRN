import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export const styles = StyleSheet.create({
  ModalBotton: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  PickerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Text1: {
    fontSize: 12,
    color: Colors.Yellow,
  },
  ModalBtn: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  SecCon: {
    paddingVertical: 15,
    width: '100%',
    backgroundColor: Colors.Blue,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
  },
  tinyLogo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  CrossBOx: {
    backgroundColor: Colors.Red,
    width: 25,
    height: 25,
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: -10,
    zIndex: 9,
    aspectRatio: 1 / 1,
  },

  LottieView: {
    height: 150,
    alignSelf: 'center',
  },
  ModalText: {
    padding: 20,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.Ash,
    fontWeight: 'bold',
  },
  ModalContainer: {
    width: '70%',
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: Colors.Yellow,
    justifyContent: 'center',
    backgroundColor: Colors.White,
  },
});
