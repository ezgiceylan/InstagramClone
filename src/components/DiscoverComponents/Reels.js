import React from 'react';
import {FlatList, View} from 'react-native';

import data3 from '../../storage/data3';

import Reel from './ReelComponent';

const Reels = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data3}
        vertical={true}
        pagingEnabled={true}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item, index}) => <Reel item={item} />}
      />
    </View>
  );
};

export default Reels;
