import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  body: {
    backgroundColor: 'black',
    flex: 1,
  },
  container: {
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'stretch',
    width: 130,
    height: 160,
    marginTop: 20,
  },
  play: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 10,
    height: 25,
    width: 50,
  },
  icon: {
    width: 10,
    height: 10,
  },
  number: {
    color: 'white',
    fontSize: 12,
    paddingLeft: 5,
  },
});
