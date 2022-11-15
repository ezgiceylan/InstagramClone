import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  image: {
    width: '100%',
    height: '85%',
    resizeMode: 'contain',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 55,
    paddingLeft: 15,
    borderRadius: 50,
    marginLeft: 5,
    width: '82%',
  },
  ıcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
    marginRight: 10,
  },
  top: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  profil: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginTop: 20,
    marginLeft: 10,
  },
  user: {
    color: 'white',
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  time: {
    color: 'grey',
    fontSize: 15,
    marginTop: 20,
    marginLeft: 10,
  },
});
