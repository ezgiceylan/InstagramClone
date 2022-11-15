import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  video: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginLeft: 10,
  },
  footer: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  user: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  explanation: {
    color: 'white',
    margin: 10,
    fontSize: 15,
    fontWeight: '500',
  },
  sound: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 5,
  },
  soundText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  right: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
  number: {
    color: 'white',
    marginBottom: 15,
    marginTop: 10,
    fontWeight: '500',
  },
  imageBottom: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
  },
  icons: {
    marginBottom: 20,
  },
});
