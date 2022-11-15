import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  right: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 5,
  },
  videos: {
    backgroundColor: '#262626',
    height: 40,
    margin: 10,
    marginTop: 2,
    borderRadius: 10,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  videosText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  labelText: {
    color: 'white',
    fontSize: 16,
    margin: 15,
    fontWeight: '500',
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#3a3a3a',
    marginTop: 10,
  },
  text2: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
  },
});
export default styles;
