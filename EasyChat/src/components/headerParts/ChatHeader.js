import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default ChatHeader = ({name, id}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ChatRoomInfo', {name, id})}>
        <Text style={{fontSize:18, fontWeight:'600'}}>{name} Room</Text>
    </TouchableOpacity>
  )
}
