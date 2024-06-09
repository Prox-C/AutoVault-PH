import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {GetStarted} from '../assets/icons/miscSvgs.js'

export default function CoverPage({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Auto<Text style={styles.ctaText}>Vault</Text></Text>
      <Image style={styles.coverImage} source={require('../assets/images/civictypeR.png')}/>
      <View style={styles.headerContainer}>
        <Text style={styles.coverHeader}>Experience high-performance, luxury, and limited edition vehicles. </Text>
        <Text style={styles.coverSubHeader}>In 3 easy steps: browse, book, drive.</Text>
      </View>
      <Pressable style={styles.mainBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Get started</Text>
        <GetStarted height={20} width={20} fill={'#fff'} style={{width: 25, height: 25, marginLeft: 2}}/>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 38,
    color: '#2d2d2d',
    width: 320,
  },

  ctaText: {
    color: '#FF2B2B'
  },

  coverImage: {
    width: 400,
    height: 200,
    marginLeft: 110,
  },

  coverHeader: {
    color: '#2d2d2d',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },

  coverSubHeader: {
    fontSize: 16,
    color: '#6A6E83',
    fontFamily:'Poppins-Regular',
  },

  headerContainer: {
    width: 320,
    height: 100,
    justifyContent: 'space-between',
  },

  mainBtn: {
    backgroundColor: '#FF2b2b',
    width: '100%',
    height: 50,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },

  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlignVertical: 'center',
    height: 30,
    paddingTop: 2,
  },
});
