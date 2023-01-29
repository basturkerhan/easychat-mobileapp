import React from 'react';
import FormStyle from '../../styles/form';
import ButtonStyle from '../../styles/button';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import firebase from '@react-native-firebase/app';
import {dangerToast} from '../../helpers/alert';
import RBSheet from 'react-native-raw-bottom-sheet';
import BackgroundColors from '../../styles/backgroundColors';
import TextColors from '../../styles/textColors';
import CreateChatStyle from '../../styles/createChat';
import {Popup} from 'popup-ui';
import {
  useSelectedRoomId,
  useSelectedRoomName,
} from '../../hooks/SelectedRoomHooks';
import {batch, useDispatch} from 'react-redux';
import {setRoomName, setRoomId} from '../../store/slices/selectedRoom';

export default EditRoomRBSheet = ({editRoomRef}) => {
  const selectedRoomName = useSelectedRoomName();
  const selectedRoomId = useSelectedRoomId();
  const dispatch = useDispatch();

  const handleEdit = async ({name}) => {
    try {
      const database = firebase.database().ref(`/rooms/${selectedRoomId}`);
      await database.update({name});
      batch(() => {
        dispatch(setRoomId(null));
        dispatch(setRoomName(null));
      });
      Popup.show({
        type: 'Success',
        title: 'Room Updated',
        textBody: `Room name updated to ${name}`,
        button: true,
        buttonText: 'Close',
        callback: () => Popup.hide(),
      });
    } catch (error) {
      dangerToast({
        title: 'Room create failed',
        textBody: error.message,
      });
    } finally {
      editRoomRef.current.close();
    }
  };

  const EditSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at min 2 characters long!')
      .max(50, 'Name must be at max 50 characters long!')
      .required('Name must have required!'),
  });

  return (
    <RBSheet
      ref={editRoomRef}
      height={300}
      animationType="fade"
      closeOnDragDown={true}
      openDuration={250}>
      <View style={FormStyle.form}>
        <Text style={CreateChatStyle.bottomHero}>Edit Room</Text>
        <Formik
          initialValues={{name: selectedRoomName || ''}}
          validationSchema={EditSchema}
          onSubmit={async (values, {resetForm, setSubmitting}) => {
            await handleEdit(values);
            resetForm();
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
                  style={[
                    ButtonStyle.ellipsisButton,
                    BackgroundColors.bgOrange,
                  ]}>
                  <Text style={[ButtonStyle.buttonText, TextColors.fullWhite]}>
                    Edit Room
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </RBSheet>
  );
};
