import {Text, ActivityIndicator, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Colors, Constants} from '../../utils';
import {CustomButtonProps} from '../../utils/type';
import AwesomeButton from 'react-native-really-awesome-button';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const CustomButton: FC<CustomButtonProps> = props => {
  const {
    onPress,
    loader,
    style,
    disabled,
    title,
    marginTop,
    small,
    round,
    white,
    isMarginTop,
    textRestyle,
    Google,
  } = props;
  const back =
    white || Google ? Colors.White : loader ? Colors.Grey : Colors.Yellow;

  return (
    <AwesomeButton
      raiseLevel={5}
      onPress={onPress}
      disabled={disabled ? disabled : loader}
      borderRadius={round ? 100 : 10}
      height={48}
      backgroundDarker={back}
      backgroundColor={back}
      width={small ? Constants.width - 100 : Constants.width - 20}
      style={[
        styles.containerStyle,
        {marginTop: isMarginTop ? marginTop : 12},
        style,
      ]}>
      <View style={GlobalStyle.row}>
        {loader && (
          <ActivityIndicator
            size={20}
            color={Colors.Black}
            style={{marginRight: 10}}
          />
        )}
        {Google && (
          <Icon
            name="google"
            size={17}
            color={Colors.Black}
            type={IconType.AntDesign}
            style={{marginRight: 10}}
          />
        )}
        <Text
          style={[
            styles.title,
            {color: white || loader || Google ? Colors.Black : Colors.White},
            textRestyle,
          ]}>
          {loader ? 'Loading...' : title}
        </Text>
      </View>
    </AwesomeButton>
  );
};

export default CustomButton;

{
  /*
<AwesomeButton
disabled={disabled ? disabled : loader}
    style={[
      GlobalStyle.justify,
      styles.containerStyle,
      {
        borderRadius: ,
        
        backgroundColor: ,
        // transform: [{scale: loader ? 0.92 : scaleValue}],
        marginTop: isMarginTop ? marginTop : 12,
      },
      style,
    ]}>
    {icon && (
      <Icon
        size={20}
        type={type}
        name={name}
        color={color}
        style={{marginRight: 10}}
      />
    )}
    {loader ? (
      <View style={GlobalStyle.row}>
        <View>{/* <BallIndicator size={20} color={Colors.White} /> </View>
        <Text style={styles.loading}>Lading...</Text>
      </View>
    ) : (
      <Text
        style={[
          styles.title,
          {color: white ? Colors.Grey : Colors.White},
          textRestyle,
        ]}>
        {title}
      </Text>
    )}
    </AwesomeButton>
  */
}
