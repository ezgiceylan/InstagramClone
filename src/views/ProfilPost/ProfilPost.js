import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import Container from '../../components/Container/Container';

const ProfilPost = ({navigation}) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('SinglePost')}>
        <Image
          source={require('../../storage/images/post.jpg')}
          style={{
            width: '33%',
            height: 135,
            marginTop: 5,
          }}
        />
      </TouchableOpacity>
    </Container>
  );
};
export default ProfilPost;
