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
    marginRight: 10,
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
    marginTop: 10,
  },
  userName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  imageUser: {
    width: 30,
    height: 30,
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
  bluecircle: {
    backgroundColor: '#0394f6',
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: 6,
  },
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    width: '99%',
    height: 55,
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  input: {
    fontSize: 15,
    color: 'white',
    paddingHorizontal: 15,
    marginLeft: 15,
    flex: 1,
  },
  icon: {
    marginRight: 15,
  },
  send: {
    color: '#0394f6',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
