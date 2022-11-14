import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  label: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  line: {
    height: '100%',
    flex: 1,
    borderTopWidth: 0.4,
    borderTopColor: '#3a3a3a',
    marginTop: 10,
  },
  topleft: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  profilImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 10,
    marginLeft: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  ımage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  leftIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginLeft: 15,
  },
  ıconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  likeText: {
    marginLeft: 15,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  postName: {
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 2,
  },
  time: {
    marginLeft: 15,
    fontSize: 10,
    color: 'grey',
    marginTop: 5,
  },
  comment: {
    marginLeft: 15,
    opacity: 0.8,
    color: 'grey',
  },
});
