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
import firebase from '@react-native-firebase/app';
import {dangerToast, successToast} from '../../helpers/alert';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import BackgroundColors from '../../styles/backgroundColors';
import TextColors from '../../styles/textColors';
import CreateChatStyle from '../../styles/createChat';

export default CreateRoomRBSheet = ({createRoomRef}) => {
  const navigation = useNavigation();

  const handleCreate = async ({name}) => {
    try {
      const user = firebase.auth().currentUser;
      const [userId, userName] = [user.uid, user.displayName];
      const database = firebase.database().ref('/rooms');
      await database.push({name, userId, userName});
      // console.log(result.key);
      successToast({
        title: 'Room created successfully',
        textBody: `Room ${name} created successfully`,
      });
    } catch (error) {
      dangerToast({
        title: 'Room create failed',
        textBody: error.message,
      });
    }
  };

  const CreateSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at min 2 characters long!')
      .max(50, 'Name must be at max 50 characters long!')
      .required('Name must have required!'),
  });

  return (
      <RBSheet 
        ref={createRoomRef} 
        height={300} 
        animationType='fade'
        closeOnDragDown={true}
        openDuration={250}>
        <View style={FormStyle.form}>
        <Text style={CreateChatStyle.bottomHero}>Create a New Room</Text>
          <Formik
            initialValues={{name: ''}}
            validationSchema={CreateSchema}
            onSubmit={async (values, {resetForm, setSubmitting}) => {
              await handleCreate(values);
              resetForm();
              setSubmitting(false);
              navigation.goBack();
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
                    value={values.name}
                    name="name"
                    onChangeText={handleChange('name')}
                    placeholder="Room name..."
                    placeholderTextColor={'#302D4C'}
                    style={FormStyle.input}
                  />
                  {errors.name && touched.name ? (
                    <Text style={FormStyle.formError}>{errors.name}</Text>
                  ) : null}
                </View>
                <View>
                  <TouchableOpacity
                    disabled={isSubmitting}
                    onPress={() => handleSubmit(values)}
                    style={[ButtonStyle.ellipsisButton, BackgroundColors.bgOrange]}>
                    <Text style={[ButtonStyle.buttonText, TextColors.fullWhite]}>Create Room</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </RBSheet>
  );
};
