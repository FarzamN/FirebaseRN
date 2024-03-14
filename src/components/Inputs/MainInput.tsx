import {View, TextInput as RNTextInput} from 'react-native';
import React, {FC, forwardRef, useState, Ref} from 'react';
import style from './style';
import {
  useController,
  Control,
  FieldValues,
  FieldPath,
  RegisterOptions,
} from 'react-hook-form';
import {MainInputType} from '../../utils/type';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../utils';
import {Validation} from '..';

const MainInput: FC<MainInputType> = forwardRef(
  (props, ref: Ref<RNTextInput>) => {
    const {
      Container,
      control,
      defaultValue,
      name,
      rules,
      onFocus,
      multiline,
      placeholder,
      keyboardType,
      password,
      maxLength,
      restyle,
      icon,
      isIcon,
      isError,
      message,
    } = props;

    const [show, setShow] = useState<boolean>(true);

    const {field} = useController({
      control: control as Control<FieldValues>,
      name: name as FieldPath<FieldValues>,
      rules: rules as RegisterOptions,
      defaultValue: defaultValue || '',
    });

    return (
      <View style={[style.Container, Container]}>
        <TextInput
          ref={ref}
          mode="outlined"
          onFocus={onFocus}
          value={field.value}
          multiline={multiline}
          placeholder={placeholder}
          onChangeText={field.onChange}
          placeholderTextColor={Colors.placeholderTextColor}
          style={[style.InputStyles, restyle]}
          keyboardType={keyboardType}
          secureTextEntry={password ? show : false}
          label={placeholder}
          textColor={Colors.White}
          maxLength={maxLength}
          cursorColor={Colors.Yellow}
          outlineColor={Colors.White}
          activeOutlineColor={Colors.Yellow}
          selectionColor="rgba(236, 179, 101, 0.6)"
          right={
            password && (
              <TextInput.Icon
                icon={show ? 'eye' : 'eye-off'}
                rippleColor="rgba(236, 179, 101, 0.6)"
                color={Colors.White}
                onPress={() => setShow(pre => !pre)}
              />
            )
          }
          left={
            isIcon && (
              <TextInput.Icon icon={icon} size={20} color={Colors.White} />
            )
          }
        />
        {isError && <Validation isError message={message} />}
      </View>
    );
  },
);

export default MainInput;
