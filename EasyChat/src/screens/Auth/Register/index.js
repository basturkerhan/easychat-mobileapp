import React, {useState} from 'react';
import LayoutStyle from '../../../styles/layout';
import FormStyle from '../../../styles/form';
import AuthStyle from '../../../styles/auth';
import BackgroundColors from '../../../styles/backgroundColors';
import TextColors from '../../../styles/textColors';
import ButtonStyle from '../../../styles/button';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import {Popup} from 'popup-ui';

export default Register = ({navigation}) => {
    const [isPasswordHide, setIsPasswordHide] = useState(true);
    const [isCheckedAgreement, setIsCheckedAgreement] = useState(false);
  
    const handleRegister = ({fullName, email, password}) => {
      if (isCheckedAgreement) {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            const user = firebase.auth().currentUser;
            user.updateProfile({
              displayName: fullName,
            });
            navigation.navigate('Main');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              Popup.show({
                type: 'Danger',
                title: 'Register Error',
                textBody: 'That email address is already in use!',
                button: true,
                buttonText: 'Close',
                callback: () => Popup.hide(),
              })
            }
  
            if (error.code === 'auth/invalid-email') {
              Popup.show({
                type: 'Danger',
                title: 'Register Error',
                textBody: 'That email address is invalid!',
                button: true,
                buttonText: 'Close',
                callback: () => Popup.hide(),
              })
            }
            Popup.show({
              type: 'Danger',
              title: 'Register Error',
              textBody: error.message,
              button: true,
              buttonText: 'Close',
              callback: () => Popup.hide(),
            })
          });
      } else {
        Popup.show({
          type: 'Danger',
          title: 'Register Error',
          textBody: 'Please agree with our Terms and Conditions',
          button: true,
          buttonText: 'Close',
          callback: () => Popup.hide(),
        })
      }
    };
  
    const SignUpSchema = Yup.object().shape({
      fullName: Yup.string()
        .min(2, 'Full Name must be at min 2 characters long!')
        .max(50, 'Full Name must be at max 50 characters long!')
        .required('Full Name must have required!'),
      email: Yup.string()
        .min(2, 'Email must be at min 2 characters long!')
        .max(50, 'Email must be at max 50 characters long!')
        .required('Email must have required!'),
      password: Yup.string()
        .min(2, 'Password must be at min 2 characters long!')
        .max(50, 'Password must be at max 50 characters long!')
        .required('Password must have required!'),
    });

  return (
    <View style={[LayoutStyle.container, BackgroundColors.bgOrange]}>
      <View style={[LayoutStyle.topF1, LayoutStyle.justifyStart]}>
        <Text style={LayoutStyle.smallHero}>Sign Up</Text>
        <Text style={LayoutStyle.smallHeroDescription}>
        Please provide following details for your new account
        </Text>
      </View>
      <View style={[LayoutStyle.bottomF2, BackgroundColors.bgWhite]}>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={values => {
            handleRegister(values);
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
                <TextInput
                  value={values.password}
                  name="password"
                  onChangeText={handleChange('password')}
                  placeholder="Password"
                  placeholderTextColor={'#302D4C'}
                  secureTextEntry={isPasswordHide}
                  style={[FormStyle.input, {position: 'relative'}]}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordHide(!isPasswordHide)}>
                  <Icon
                    name={isPasswordHide ? 'eye-slash' : 'eye'}
                    size={20}
                    color="rgba(26,25,57,0.5)"
                    style={AuthStyle.eyeIcon}
                  />
                </TouchableOpacity>
                {errors.password && touched.password ? (
                  <Text style={FormStyle.formError}>{errors.password}</Text>
                ) : null}
              </View>

              <View style={FormStyle.item}>
                <View style={AuthStyle.checkboxContainer}>
                  <TouchableOpacity
                    style={AuthStyle.checkbox}
                    onPress={() => setIsCheckedAgreement(!isCheckedAgreement)}>
                    {isCheckedAgreement && (
                      <Icon name={'check'} size={20} color="#F5B183" />
                    )}
                  </TouchableOpacity>
                  <View style={AuthStyle.checkboxTextContainer}>
                    <Text style={TextColors.placeholder}>
                      By creating our account you have to agree with our Teams
                      and Conditions
                    </Text>
                  </View>
                </View>
                {errors.checked && touched.checked ? (
                  <Text style={FormStyle.formError}>{errors.checked}</Text>
                ) : null}
              </View>

              <View style={FormStyle.item}>
                <TouchableOpacity
                  onPress={() => handleSubmit(values)}
                  style={[ButtonStyle.ellipsisButton, BackgroundColors.bgBlack, {marginTop: 30}]}>
                  <Text style={[ButtonStyle.buttonText, TextColors.white]}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
