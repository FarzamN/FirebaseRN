import React, {FC} from 'react';
import {AuthBody, MainInput} from '../../components';
import {useForm} from 'react-hook-form';
import {
  emailPattern,
  required,
  minLength,
  maxLength,
} from '../../utils/Constants';
import auth from '@react-native-firebase/auth';

const Login: FC = () => {
  const onSubmit = async (data: object) => {
    const email = data.email;
    const password = data.password;
    try {
      // const res = await auth().createUserWithEmailAndPassword(email, password);
      const res = await auth().signInWithEmailAndPassword(email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  return (
    <AuthBody
      heading="Login with Email"
      sub="Login please"
      title="Submit"
      onPress={handleSubmit(onSubmit)}>
      <MainInput
        isIcon
        icon="email"
        control={control}
        name="email"
        rules={{
          required: required('Email'),
          pattern: emailPattern,
        }}
        placeholder="Email"
        isError={errors.email}
        message={errors?.email?.message}
        keyboardType={'email-address'}
      />
      <MainInput
        isIcon
        password
        icon="form-textbox-password"
        control={control}
        name="password"
        rules={{
          minLength,
          maxLength,
          required: required('Password'),
        }}
        placeholder="Password"
        isError={errors.password}
        message={errors?.password?.message}
      />
    </AuthBody>
  );
};

export default Login;
