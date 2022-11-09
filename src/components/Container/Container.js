import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Container = ({insets, children}) => {
  const {top, bottom, left, right} = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets?.top ? top : undefined,
        paddingBottom: insets?.bottom ? bottom : undefined,
        paddingLeft: insets?.left ? left : undefined,
        paddingRight: insets?.right ? right : undefined,
        flex: 1,
        backgroundColor: 'black',
      }}>
      {children}
    </View>
  );
};
export default Container;
