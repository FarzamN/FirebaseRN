import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardProps} from '../../utils/interface';
import {Colors} from '../../utils';
import {MD3Colors} from 'react-native-paper';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {style} from './style';

const Keyboard: React.FC<KeyboardProps> = ({
  onPressKey,
  onDelete,
  onDone,
  visible,
}) => {
  const renderKey = (value: string) => (
    <TouchableOpacity
      key={value}
      style={style.key}
      onPress={() => onPressKey(value)}>
      <Text style={style.keyText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    visible && (
      <>
        <View style={style.KeyboardRow}>{['1', '2', '3'].map(renderKey)}</View>
        <View style={style.KeyboardRow}>{['4', '5', '6'].map(renderKey)}</View>
        <View style={style.KeyboardRow}>{['7', '8', '9'].map(renderKey)}</View>
        <View style={style.KeyboardRow}>
          <TouchableOpacity
            style={[style.key, {backgroundColor: '#4A76FD'}]}
            onPress={onDone}>
            <Icon
              size={25}
              color={Colors.White}
              name="checkmark-done"
              type={IconType.Ionicons}
            />
          </TouchableOpacity>
          {renderKey('0')}
          <TouchableOpacity
            style={[style.key, {backgroundColor: MD3Colors.error50}]}
            onPress={onDelete}>
            <Icon
              size={22}
              name="delete"
              color={Colors.White}
              type={IconType.Feather}
            />
          </TouchableOpacity>
        </View>
      </>
    )
  );
};

export default Keyboard;
