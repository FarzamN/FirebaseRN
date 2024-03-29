import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import {HeadingType} from '../../utils/type';

const Sub: FC<HeadingType> = props => {
  const {text, style, center, marginTop, onPress} = props;
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Text
        style={[
          styles.Sub,
          {textAlign: center ? 'center' : 'left', marginTop: marginTop},
          style,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Sub;
