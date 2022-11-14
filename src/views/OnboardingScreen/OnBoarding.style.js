import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  subtitle: {
    color: '#acacac',
    fontSize: 15,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  icon: {
    marginTop: 10,
    marginLeft: 15,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },

  indicator: {
    height: 5,
    width: 5,
    backgroundColor: '#979797',
    marginHorizontal: 3,
    borderRadius: 100,
  },
  btn: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#0195f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  line: {
    borderBottomWidth: 0.6,
    borderBottomColor: '#3a3a3a',
    marginTop: 25,
  },
});
