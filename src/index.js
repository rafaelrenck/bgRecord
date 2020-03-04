import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import Background from '~/components/Background';

export default function App() {
  return (
    <NavigationContainer>
      <Background>
        <Text>bgRecord</Text>
      </Background>
    </NavigationContainer>
  );
}
