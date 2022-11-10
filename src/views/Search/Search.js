import React from 'react';
import {FlatList, Image, SafeAreaView} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import SearchBar from '../../components/SearchBar/SearchBar';
import data from '../../storage/database/search';

const Search = () => {
  const flatListRef = React.useRef(null);
  useScrollToTop(flatListRef);

  const renderItem = ({item}) => (
    <Image
      source={item.image}
      style={{width: '33%', height: 130, margin: 1.5}}
    />
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
