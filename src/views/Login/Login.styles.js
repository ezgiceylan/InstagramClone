import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '35%',
  },
  logo: {
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  ınputsContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 350,
  },
  usernameInput: {
    backgroundColor: '#3a3a3a',
    width: '84%',
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 8,
    paddingRight: 6,
  },
  login: {
    backgroundColor: '#0195f7',
    width: '84%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },
  text: {
    flexDirection: 'row',
  },
  help: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
  },
  seperator: {
    borderBottomColor: '#3a3a3a',
    borderBottomWidth: 0.6,
    width: '37%',
    marginLeft: 5,
    marginRight: 5,
  },
  seperatorStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  faceText: {
    color: '#329CFA',
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  bottom: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column-reverse',
    height: '25%',
  },
  line: {
    borderBottomColor: '#3a3a3a',
    borderBottomWidth: 0.6,
    width: '100%',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    height: '20%',
  },
});
