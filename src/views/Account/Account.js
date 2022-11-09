import React from 'react';

import Bio from '../../components/AccountComponents/Bio';
import Highlighs from '../../components/AccountComponents/Highlighs';
import ProfilBar from '../../components/AccountComponents/ProfilBar';
import ProfileHeader from '../../components/AccountComponents/ProfilHeader';
import Container from '../../components/Container/Container';
import TopTabNavigator from '../../navigation/TopTabNavigator';

const Account = ({route}) => {
  return (
    <Container insets={{top: true}}>
      <ProfilBar />
      <ProfileHeader />
      <Bio route={route.params} />
      <Highlighs />
      <TopTabNavigator />
    </Container>
  );
};
export default Account;