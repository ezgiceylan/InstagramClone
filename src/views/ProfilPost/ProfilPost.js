import React from 'react';
import {Image} from 'react-native';

import Container from '../../components/Container/Container';

const ProfilPost = () => {
  return (
    <Container>
      <Image
        source={require('../../storage/images/post.jpg')}
        style={{
          width: '33%',
          height: 135,
          marginTop: 5,
        }}
      />
    </Container>
  );
};
export default ProfilPost;
