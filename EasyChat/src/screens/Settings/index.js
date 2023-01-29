import React, {useEffect} from 'react';
import FormStyle from '../../styles/form';
import BackgroundColors from '../../styles/backgroundColors';
import TextColors from '../../styles/textColors';
import ButtonStyle from '../../styles/button';
import LayoutStyle from '../../styles/layout';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import firebase from '@react-native-firebase/app';
import {Formik} from 'formik';
import {Popup} from 'popup-ui';
import * as Yup from 'yup';

export default Settings = () => {

  const handleUpdate = ({fullName, email}) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: fullName,
      email: email,
    });
    Popup.show({
      type: 'Success',
      title: 'Profile Updated',
      textBody: 'User profile and informations are updated successfully!',
      button: true,
      buttonText: 'Close',
      callback: () => Popup.hide(),
    })
  }

  const UpdateProfileSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Full Name must be at min 2 characters long!')
      .max(50, 'Full Name must be at max 50 characters long!')
      .required('Full Name must have required!'),
    email: Yup.string()
      .min(2, 'Email must be at min 2 characters long!')
      .max(50, 'Email must be at max 50 characters long!')
      .required('Email must have required!'),
  });

  return (
    <View style={[LayoutStyle.topF1, LayoutStyle.justifyCenter]}>
      <Formik
        initialValues={{
          fullName: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email,
        }}
        validationSchema={UpdateProfileSchema}
        onSubmit={values => {
          handleUpdate(values);
        }}>
        {({errors, touched, values, handleSubmit, handleChange}) => (
          <View>
            <View style={FormStyle.item}>
              <TextInput
                value={values.fullName}
                name="fullName"
                onChangeText={handleChange('fullName')}
                placeholder="Full Name"
                placeholderTextColor={'#302D4C'}
                style={FormStyle.input}
              />
              {errors.fullName && touched.fullName ? (
                <Text style={FormStyle.formError}>{errors.fullName}</Text>
              ) : null}
            </View>
            <View style={FormStyle.item}>
              <TextInput
                value={values.email}
                name="email"
                onChangeText={handleChange('email')}
                placeholder="Email"
                placeholderTextColor={'#302D4C'}
                style={FormStyle.input}
              />
              {errors.email && touched.email ? (
                <Text style={FormStyle.formError}>{errors.email}</Text>
              ) : null}
            </View>

            <View style={FormStyle.item}>
              <TouchableOpacity
                onPress={() => handleSubmit(values)}
                style={[
                  ButtonStyle.ellipsisButton,
                  BackgroundColors.bgOrange,
                  {marginTop: 30},
                ]}>
                <Text style={[ButtonStyle.buttonText, TextColors.white]}>
                  Change My Informations
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 10, alignItems:'center'}}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>I want to change my password</Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
