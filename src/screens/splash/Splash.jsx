import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Splash = () => {

  let navigation = useNavigation();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 3000);

    return () => {
      clearTimeout(timer);
    }

  }, []);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash