import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import Container from '../../components/Container/Container';
import Post from '../../components/HomeComponents/Post';
import Stories from '../../components/HomeComponents/Stories';
import TopBar from '../../components/HomeComponents/TopBar';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = () => {
  const scrollViewRef = React.useRef(null);
  const [refreshing, setRefreshing] = React.useState(false);

  useScrollToTop(scrollViewRef);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <Container insets={{top: true}}>
      <TopBar />
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Stories />
        <Post />
      </ScrollView>
    </Container>
  );
};
export default Home;
