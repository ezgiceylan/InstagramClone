import React, {useRef} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import store from '../../storage/database/store';

import styles from './Store.style';

const {width} = Dimensions.get('window');

const TopLabel = () => {
  const bottomSheet = useRef();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Mağaza</Text>
      </View>
      <View style={styles.right}>
        <Image source={require('../../../assets/images/calendar.png')} />

        <BottomSheet
          hasDraggableIcon
          ref={bottomSheet}
          height={250}
          sheetBackgroundColor="#262626">
          <View style={{backgroundColor: 'black', flex: 1, marginTop: 10}}>
            <Text style={styles.labelText}>Hesabın</Text>
            <View style={styles.containerText}>
              <Ionicons name="notifications-outline" size={24} color="white" />
              <TouchableOpacity>
                <Text style={styles.text2}>Alışveriş hareketleri</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <Text style={styles.labelText}>Instagram Mağazası</Text>
            <Text style={styles.labelText}>Videolar</Text>
          </View>
        </BottomSheet>

        <TouchableOpacity onPress={() => bottomSheet.current.show()}>
          <FontAwesome name="bars" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Store = () => {
  return (
    <Container insets={{top: true}}>
      <TopLabel />
      <SearchBar placeHolders={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.videos}>
          <Text style={styles.videosText}>Videolar</Text>
        </TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {store.map((data, index) => {
              return (
                <View key={index}>
                  <Image
                    style={{
                      height: 180,
                      width: width * 0.5,
                      resizeMode: 'cover',
                      borderWidth: 1,
                      borderColor: 'black',
                    }}
                    source={data.image}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Store;
