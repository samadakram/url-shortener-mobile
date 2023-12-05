import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { logo } from '../../utils/constant';

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
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    // alignSelf: 'center'
  }
});

export default Splash