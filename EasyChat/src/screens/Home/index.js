import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import ChatRoomItem from '../../components/home/ChatRoomItem';
import DeleteRoomAlertModalBox from '../../components/modalbox/DeleteRoomAlertModalBox';
import {DotIndicator} from 'react-native-indicators';
import InternetConnectionError from '../../components/errorBox/InternetConnectionError';
import NetInfo from '@react-native-community/netinfo';
import BackgroundColors from '../../styles/backgroundColors';
import EditRoomRBSheet from '../../components/bottomSheets/EditRoomRBSheet';

export default Home = ({route}) => {
  const [rooms, setRooms] = useState(null);
  const [filteredRooms, setFilteredooms] = useState([]);
  const [isConnected, setIsConnected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  const editRoomRef = useRef(null);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      console.log(state.isConnected);
      setIsConnected(state.isConnected);
    });

    if (isConnected) {
      const user = firebase.auth().currentUser;
      database()
        .ref('/rooms')
        .orderByChild('name')
        .on('value', snapshot => {
          let roomArray = [];
          snapshot.forEach(item => {
            const [name, userName, userId, id] = [
              item.val().name,
              item.val().userName,
              item.val().userId,
              item.key,
            ];
            roomArray.push({name, userName, userId, id});
          });

          setRooms(roomArray);
          setIsLoading(true);
        });
    } else if (isConnected === false) {
      setIsLoading(true);
    }

    // navigation.addListener('willFocus', () => loadRooms());
  }, [isConnected]);

  useEffect(() => {
    if(rooms && route?.params?.searchText?.length>=0) {
      const filteredRooms = 
        rooms.filter(room => room.name.includes(route.params.searchText));
      setFilteredooms(filteredRooms);
    }
  }, [route?.params?.searchText])

  return (
    <SafeAreaView style={[BackgroundColors.bgWhite, {flex: 1}]}>
      <DeleteRoomAlertModalBox modalRef={modalRef} />
      <EditRoomRBSheet editRoomRef={editRoomRef} />

      {isLoading === false ? (
        <DotIndicator color="red" />
      ) : (
        <FlatList
          data={filteredRooms.length > 0 ? filteredRooms : rooms}
          renderItem={({item}) => (
            <ChatRoomItem
              modalRef={modalRef}
              editRoomRef={editRoomRef}
              item={item}
            />
          )}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (
            <InternetConnectionError isConnected={isConnected} />
          )}
        />
      )}
    </SafeAreaView>
  );
};
