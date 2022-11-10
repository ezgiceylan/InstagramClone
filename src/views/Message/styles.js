import {StyleSheet} from 'react-native';
export default StyleSheet.create({
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
  back: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  imageUser: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginLeft: 15,
  },
  topMessage: {
    flexDirection: 'row',
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageUser: {
    fontSize: 14,
    color: 'white',
    opacity: 0.7,
    marginTop: 2,
    fontWeight: '500',
  },
});
