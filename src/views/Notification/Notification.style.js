import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 100,
  },
  user: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  message: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },

  butonText: {
    color: 'white',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },

  time: {
    color: 'white',
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  line: {
    height: '100%',
    flex: 1,
    borderTopWidth: 0.4,
    borderTopColor: '#3a3a3a',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  story: {
    height: 50,
    width: 50,
  },
});
