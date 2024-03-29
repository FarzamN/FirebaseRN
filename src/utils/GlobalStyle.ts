import {StyleSheet, StatusBar} from 'react-native';
import {Colors} from '.';

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue,
  },
  full: {
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Space_Between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Space_evenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  justify: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row_center: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Shadow: {
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  TextShadow: {
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  MapContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  Padding: {
    width: '95%',
    alignSelf: 'center',
  },

  Vertical_Space: {
    height: 15,
  },
  mt: {marginTop: 15},
  statusBar: {marginTop: StatusBar.currentHeight},
  ripple: {
    color: Colors.Yellow,
  },
});
