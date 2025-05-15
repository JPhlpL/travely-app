import React from 'react';
import { Image, View } from 'react-native';

export default function Header() {
  return (
    <View>
      <Image source={require('./../../assets/images/icon.png')}></Image>
     </View>
  );
}
