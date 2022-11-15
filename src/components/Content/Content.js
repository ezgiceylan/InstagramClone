import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

import styles from './styles';

const Content = ({children, style, containerStyle, contentStyle, ...props}) => {
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{...styles.container, ...style}}
      keyboardVerticalOffset={headerHeight}>
      <ScrollView
        style={contentStyle}
        contentContainerStyle={{...styles.contentView, ...containerStyle}}
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'interactive'}
        {...props}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Content;
