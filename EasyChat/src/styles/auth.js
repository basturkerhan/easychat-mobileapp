import {StyleSheet} from 'react-native';

export default AuthStyle = StyleSheet.create({
  //   LOGIN
  eyeIcon: {
    position: 'absolute',
    right: 10,
    bottom: 15,
  },
  forgot: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    fontSize: 16,
    color: '#302D4C',
  },

  // REGISTER
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkbox: {
    width: 34,
    height: 34,
    backgroundColor: 'rgba(113,101,227,0.2)',
    borderColor: '#7165E3',
    borderWidth: 1,
    borderRadius: 7,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxTextContainer: {
    flex: 1,
    flexWrap: 'nowrap',
  },

  rightTextContainer: {
    marginRight: 15,
  },
  rightText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
