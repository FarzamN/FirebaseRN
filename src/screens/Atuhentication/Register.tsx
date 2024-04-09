import {View, Text} from 'react-native';
import React, {FC} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useForm} from 'react-hook-form';
import {AuthBody, MainInput} from '../../components';
import {
  emailPattern,
  required,
  minLength,
  maxLength,
} from '../../utils/Constants';

const Register: FC = () => {
  const onSubmit = async (data: object) => {
    console.log(data);
    firestore()
      .collection('users')
      .add(data)
      .then(() => {
        console.log('User added!');
      });
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <AuthBody
      heading="Register Your account"
      sub="If you don't have account already"
      title="Submit"
      onPress={handleSubmit(onSubmit)}>
      <MainInput
        isIcon
        icon="account-circle"
        control={control}
        name="name"
        rules={{
          required: required('Name'),
        }}
        placeholder="Full Name"
        isError={errors.name}
        message={errors?.name?.message}
      />
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

export default Register;
