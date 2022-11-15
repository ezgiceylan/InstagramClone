import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  keyboardView: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '35%',
  },
  logo: {
    height: 40,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#3a3a3a',
    width: '84%',
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 8,
    paddingRight: 6,
    marginBottom: 20,
  },
  login: {
    backgroundColor: '#0195f7',
    width: '84%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
    marginVertical: 15,
  },
  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  faceText: {
    color: '#329CFA',
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  bottom: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
  line: {
    borderBottomColor: '#3a3a3a',
    borderBottomWidth: 0.6,
    width: '100%',
    marginTop: 10,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    height: '22%',
  },
});
