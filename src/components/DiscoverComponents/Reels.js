import React from 'react';
import {FlatList, View} from 'react-native';

import data from '../../storage/database/reels';

import Reel from './ReelComponent';

const Reels = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        pagingEnabled={true}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item, index}) => <Reel item={item} />}
      />
    </View>
  );
};

export default Reels;
