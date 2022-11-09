import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    backgroundColor: 'black',
    flex: 1,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {paddingRight: 25},

  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    margin: 30,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  change: {
    color: '#0098fd',
    fontWeight: '500',
    fontSize: 18,
    marginTop: 15,
  },
  inputContainer: {
    justifyContent: 'space-around',
    height: '30%',
  },
  inputLabel: {
    color: 'grey',
    fontWeight: '500',
  },
  input: {
    color: 'white',
    fontSize: 19,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  lineGrey: {
    borderBottomWidth: 0.8,
    borderBottomColor: '#3a3a3a',
    marginTop: 10,
  },
  blueText: {
    color: '#0098fd',
    fontSize: 18,
  },
  blueContainer: {
    justifyContent: 'space-around',
    marginTop: 20,
    height: '22%',
  },
  sheetText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17,
  },
});
