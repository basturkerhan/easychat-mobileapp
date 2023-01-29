import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import ModalBox from 'react-native-modalbox';
import ButtonStyle from '../../styles/button';
import AlertModalStyle from '../../styles/alertModalBox';
import {useSelectedRoomId} from '../../hooks/SelectedRoomHooks';
import database from '@react-native-firebase/database';
import { useDispatch } from 'react-redux';
import { setRoomId } from '../../store/slices/selectedRoom';
import { successToast, dangerToast } from '../../helpers/alert';

export default DeleteRoomAlertModalBox = ({modalRef}) => {
  const roomId = useSelectedRoomId();
  const dispatch = useDispatch();

  const handleDeleteRoom = () => {
    modalRef.current.close();
    database()
      .ref(`/rooms/${roomId}`)
      .remove()
      .then(() => {
        database()
          .ref(`/messages/${roomId}`)
          .remove()
          .then(() => {
            dispatch(setRoomId(null));
            successToast({
              title: 'Room deleted successfully',
              textBody: `Room deleted successfully`,
            });
          });
      })
      .catch(error => {
        dangerToast({
          title: 'Room create failed',
          textBody: error.message,
        });
      });
  };

  return (
    <ModalBox
      ref={modalRef}
      position="center"
      style={AlertModalStyle.modal}
      backdropOpacity={0.2}>
      <View style={AlertModalStyle.modalBody}>
        <Text style={AlertModalStyle.hero}>Are You Sure?</Text>
        <Text style={AlertModalStyle.heroDescription}>
          Are you sure you want to delete this room?
        </Text>
        <View style={AlertModalStyle.buttonContainer}>
          <TouchableOpacity
            style={[
              ButtonStyle.button,
              ButtonStyle.redButton,
              {flex: 1, marginRight: 10, borderRadius: 0},
            ]}
            onPress={() => modalRef.current.close()}>
            <Text style={[ButtonStyle.buttonText, {color: 'white'}]}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              ButtonStyle.button,
              ButtonStyle.greenButton,
              {flex: 1, marginLeft: 10, borderRadius: 0},
            ]}
            onPress={() => handleDeleteRoom()}>
            <Text style={[ButtonStyle.buttonText, {color: 'white'}]}>
              I Agree
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalBox>
  );
};
