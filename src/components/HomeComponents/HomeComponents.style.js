import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    height: 370,
    resizeMode: 'contain',
  },
  leftIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '25%',
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
  },
  comment: {
    marginLeft: 15,
    marginTop: 2,
    opacity: 0.8,
    color: 'grey',
  },
  topContainer: {
    paddingTop: 6,
  },
  top2: {
    marginLeft: 10,
  },
  circle: {
    width: 75,
    height: 75,
    backgroundColor: 'black',
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: '#2E2E2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    width: '90%',
    height: '90%',
    borderRadius: 100,
    borderWidth: 0.8,
    borderColor: '#2E2E2E',
  },
  textLabel: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    marginTop: 5,
  },
  body: {
    height: '7%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  icon: {
    height: 30,
    width: 150,
    resizeMode: 'contain',
    margin: 5,
    alignItems: 'center',
    marginLeft: -8,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '34%',
  },
  logoContainer: {
    marginTop: 5,
  },
});
