import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {
  AuthBody,
  CustomButton,
  FullImage,
  Heading,
  ImageBackground,
} from '../../components';
import style from '../../components/Layout/style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {navigationInterface} from '../../utils/interface';

const Splash: FC<navigationInterface> = ({navigation}) => {
  const {navigate} = navigation;

  const onSubmit = (type: string) => {
    navigate(type);
  };
  return (
    <ImageBackground between>
      <View style={{marginTop: 30}}>
        <FullImage
          radius={10}
          style={style.Image_Box}
          source={require('../../assets/image/logo.png')}
        />
        <Heading text="Create account or Login" center />
      </View>
      <View style={{marginBottom: 15}}>
        <CustomButton
          title="Register Account"
          onPress={() => onSubmit('register')}
        />
        <CustomButton title="Login Account" onPress={() => onSubmit('login')} />
      </View>
    </ImageBackground>
  );
};

export default Splash;
