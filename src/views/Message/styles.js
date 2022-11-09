import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,

    fontWeight: '500',
  },
  title2: {
    color: '#0098fd',
    fontSize: 18,
    opacity: 0.8,
    fontWeight: '500',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 10,
  },
  user: {
    color: 'white',
    fontSize: 16,
  },
  message: {
    color: 'white',
    opacity: 0.7,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
  },
});
