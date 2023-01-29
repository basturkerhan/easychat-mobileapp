import React from 'react';
import FormStyle from '../../styles/form';
import ButtonStyle from '../../styles/button';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import BackgroundColors from '../../styles/backgroundColors';
import TextColors from '../../styles/textColors';
import CreateChatStyle from '../../styles/createChat';

export default JoinRoomRBSheet = ({joinRoomRef}) => {
  const navigation = useNavigation();

  const handleJoin = async ({id}) => {
    database()
    .ref(`/rooms/${id}`)
    .once('value')
    .then(snapshot => {
      navigation.navigate('ChatRoomDetail', { id, name: snapshot.val().name });
    });
  };

  const JoinSchema = Yup.object().shape({
    id: Yup.string()
      .min(2, 'Id must be at min 2 characters long!')
      .max(50, 'Id must be at max 50 characters long!')
      .required('Id must have required!'),
  });

  return (
      <RBSheet 
        ref={joinRoomRef} 
        height={300}
        animationType='fade'
        closeOnDragDown={true}
        openDuration={250}>
        <View style={FormStyle.form}>
        <Text style={CreateChatStyle.bottomHero}>Join Room With ID</Text>
          <Formik
            initialValues={{id: ''}}
            validationSchema={JoinSchema}
            onSubmit={async (values, {resetForm, setSubmitting}) => {
              await handleJoin(values);
              // resetForm();
              setSubmitting(false);
            }}>
            {({
              errors,
              touched,
              values,
              handleSubmit,
              handleChange,
              isSubmitting,
            }) => (
              <View>
                <View style={FormStyle.item}>
                  <TextInput
                    value={values.id}
                    name="id"
                    onChangeText={handleChange('id')}
                    placeholder="Room id..."
                    placeholderTextColor={'#302D4C'}
                    style={FormStyle.input}
                  />
                  {errors.id && touched.id ? (
                    <Text style={FormStyle.formError}>{errors.id}</Text>
                  ) : null}
                </View>
                <View>
                  <TouchableOpacity
                    disabled={isSubmitting}
                    onPress={() => handleSubmit(values)}
                    style={[ButtonStyle.ellipsisButton, BackgroundColors.bgOrange]}>
                    <Text style={[ButtonStyle.buttonText, TextColors.fullWhite]}>Join Room</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </RBSheet>
  );
};
