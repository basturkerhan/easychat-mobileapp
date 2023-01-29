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
import {Popup} from 'popup-ui';

export default Login = ({navigation}) => {
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  const handleLogin = ({email, password}) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Main');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          Popup.show({
            type: 'Danger',
            title: 'Login Error',
            textBody: 'Wrong password!',
            button: true,
            buttonText: 'Close',
            callback: () => Popup.hide(),
          })
          return;
        }

        if (error.code === 'auth/user-not-found') {
          Popup.show({
            type: 'Danger',
            title: 'Login Error',
            textBody: 'User not found!',
            button: true,
            buttonText: 'Close',
            callback: () => Popup.hide(),
          })
          return;
        }

        Popup.show({
          type: 'Danger',
          title: 'Login Error',
          textBody: error.message,
          button: true,
          buttonText: 'Close',
          callback: () => Popup.hide(),
        })
      });
  };

  const SignInSchema = Yup.object().shape({
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
        <Text style={LayoutStyle.smallHero}>Sign In</Text>
        <Text style={LayoutStyle.smallHeroDescription}>
          Sign in to continue EasyChat
        </Text>
      </View>
      <View style={[LayoutStyle.bottomF1, BackgroundColors.bgWhite]}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={SignInSchema}
          onSubmit={values => {
            handleLogin(values);
          }}>
          {({errors, touched, values, handleSubmit, handleChange}) => (
            <View>
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
              <View style={[FormStyle.item, AuthStyle.forgot]}>
                <Text>Forgot Password?</Text>
              </View>
              <View style={FormStyle.item}>
                <TouchableOpacity
                  onPress={() => handleSubmit(values)}
                  style={[ButtonStyle.ellipsisButton, BackgroundColors.bgBlack, {marginTop: 30}]}>
                  <Text style={[ButtonStyle.buttonText, TextColors.white]}>
                    Sign In
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
