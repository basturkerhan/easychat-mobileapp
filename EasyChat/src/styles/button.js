import {StyleSheet} from 'react-native';

export default ButtonStyle = StyleSheet.create({
  button: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },

  ellipsisButton: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingHorizontal: 40,
  },

  swipeButton: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },


  // GİDECEK
  primaryButton: {backgroundColor: '#7165E3'},
  secondaryButton: {backgroundColor: '#DB4437'},
  pinkButton: {backgroundColor: '#E97777'},
  redButton: {backgroundColor: '#FD8A8A'},
  greenButton: {backgroundColor: '#A8D1D1'},
  googleButton: {backgroundColor: '#DB4437'},
});
