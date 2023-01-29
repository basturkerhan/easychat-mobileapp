import {StyleSheet} from 'react-native';

export default DrawerNavigatorStyle = StyleSheet.create({
  drawerBody: {
    backgroundColor: '#8200d6',
  },
  backgroundImage: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarName: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 10,
  },
  itemList: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  signoutWrapper: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  signoutContainer: {
    paddingVertical: 15,
  },
  signoutInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signoutText: {
    fontSize: 15,
    marginLeft: 5,
  },
});
