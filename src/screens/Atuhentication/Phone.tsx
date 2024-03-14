import React, {useState, useEffect} from 'react';
import {AuthBody, CustomButton, MainInput} from '../../components';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';

const Phone = () => {
  const [confirm, setConfirm] = useState(null);
  const onAuthStateChanged = user => {
    if (user) {
      // Do something if user is authenticated
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // Unsubscribe on unmount
  }, []);

  // Handle the button press
  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };

  const confirmCode = async data => {
    try {
      await confirm.confirm(data.phone);
    } catch (error) {
      Toast.show('Invalid code.');
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'}); // Always render useForm hook

  return (
    <AuthBody heading="Login with Phone" sub="Please login" noButton>
      <MainInput
        isIcon
        icon="form-textbox-password"
        control={control}
        name="phone"
        // rules={rules}
        placeholder={'Phone number'}
        isError={errors}
        message={errors?.message}
        keyboardType="number-pad"
      />
      {!confirm ? (
        <CustomButton
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+92 311 0367927')}
        />
      ) : (
        <CustomButton title="Submit" onPress={handleSubmit(confirmCode)} />
      )}
    </AuthBody>
  );
};

export default Phone;
