import {StyleSheet} from 'react-native';

export default ChatRoomItemStyle = StyleSheet.create({
    roomCard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(101,99,121, .3)'
      },
      roomCardPreview: {
        // backgroundColor: '#2A265F',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 40
      },
      roomCardNameIdentifier: {
        opacity: 0.6,
        marginBottom: 5,
        letterSpacing: 1,
        textTransform: 'uppercase',
      },
      roomCardName: {
        letterSpacing: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#302D4C',
      },
      roomCardInfo: {
        paddingHorizontal: 25,
      },
      rightSwipe: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 10,
        right: 15,
        bottom: 10,
        width: 80
      },
      iconContainer: {
        alignItems: 'stretch',
        justifyContent:'space-evenly',
        width: '100%',
        height: '100%',
      },
});
