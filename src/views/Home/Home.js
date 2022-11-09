import React from 'react';
import {ScrollView} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import Container from '../../components/Container/Container';
import Post from '../../components/HomeComponents/Post';
import Stories from '../../components/HomeComponents/Stories';
import TopBar from '../../components/HomeComponents/TopBar';

const Home = () => {
  const scrollViewRef = React.useRef(null);
  useScrollToTop(scrollViewRef);

  return (
    <Container insets={{top: true}}>
      <TopBar />
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <Stories />
        <Post />
      </ScrollView>
    </Container>
  );
};
export default Home;
