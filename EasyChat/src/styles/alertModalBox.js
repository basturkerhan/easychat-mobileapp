import {StyleSheet} from 'react-native';

export default AlertModalBox = StyleSheet.create({
    hero: {
      fontSize: 18,
      fontWeight: '500',
      letterSpacing: 1,
      paddingTop: 10,
    },
    heroDescription: {
      paddingTop: 20,
      fontSize: 16,
    },
    modal: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '95%',
      height: 250,
      backgroundColor: '#fff',
      padding: 15,
    },
    modalBody: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 40,
    },
  });