import React from 'react';
import {FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import SearchBar from '../../components/SearchBar/SearchBar';
import data from '../../storage/database/search';

const Search = () => {
  const flatListRef = React.useRef(null);
  useScrollToTop(flatListRef);

  const renderItem = ({item, index}) => (
    <TouchableOpacity key={index} style={{width: '33%', margin: 0.8}}>
      <Image
        source={item.image}
        style={{width: '100%', height: 130, borderWidth: 1}}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <SearchBar ıconColor={true} />
      <FlatList
        ref={flatListRef}
        horizontal={false}
        data={data}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default Search;
