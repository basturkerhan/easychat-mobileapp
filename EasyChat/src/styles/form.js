import {StyleSheet} from 'react-native';

export default FormStyle = StyleSheet.create({
  heroContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
  },
  hero: {
    color: '#1C1939',
    fontWeight: '600',
    fontSize: 40,
  },
  heroDescription: {
    color: 'rgba(26,25,57,0.8)',
    fontSize: 17,
    marginTop: 5,
    fontWeight: '500',
  },
  form: {
    paddingHorizontal: 30,
  },
  item: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F7F7F7',
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 50,
    borderWidth: 0,
  },
  footerLink: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
    fontWeight: '500',
  },
  footerText: {
    color: '#302D4C',
    fontWeight: '600',
  },
  formError: {
    color: 'red'
  }
});
