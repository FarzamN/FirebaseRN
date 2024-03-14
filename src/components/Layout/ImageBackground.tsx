import {ImageBackground as IB, View} from 'react-native';
import React, {FC} from 'react';
import {Body} from '..';
import {GlobalStyle} from '../../utils/GlobalStyle';
import styles from './style';
import {ImageBackgroundType as IBT} from '../../utils/type';

const ImageBackground: FC<IBT> = props => {
  const {children, between} = props;
  return (
    <Body>
      <IB
        resizeMode="cover"
        source={require('../../assets/image/back.jpg')}
        style={GlobalStyle.container}>
        <View style={[styles.overlay, between && styles.Center_Container]}>
          {children}
        </View>
      </IB>
    </Body>
  );
};

export default ImageBackground;
