
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {SearchIcon, FilterIcon, CarIcon} from '../assets/icons/miscSvgs.js'
import BrandFilterBtn from '../components/brandFilter';
import {HondaLogo, ToyotaLogo, BmwLogo, MercedesLogo, TeslaLogo, MitsubishiLogo, AudiLogo, KiaLogo} from '../assets/icons/brandLogos.js';


export default function HomePage() {

    return (
      <View style={styles.body}>

        {/* Header */}
        <Text style={styles.header1}>Hello, User</Text>
        <Text style={styles.secondaryText}>What kind of ride are you looking for?</Text>

        {/* Search */}
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Search' placeholderTextColor={"#8f8f8f"}/>
          <SearchIcon height={12} width={12} fill={'#8f8f8f'}/>

          </View>
          
          <Pressable style={styles.filterBtn}>
            <FilterIcon fill={'#fff'} height={15} width={15}/>
          </Pressable>

        </View>

         {/* Featured */}
        <LinearGradient style={styles.featured} colors={["#444444", "#000000"]} start={{x: 0.1, y: 0.2}}>
          <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-between'}}>
            <View style={{width: 160}}>
              <Text style={styles.featuredHdr}> Hot Deals </Text>
              <Text style={styles.featuredSub}>Check out our newly-acquired Honda Civic Type-R 2019</Text>
            </View>
            <Pressable style={styles.featuredBtn}>
              <Text style={{color: '#ffffff', fontFamily: 'Poppins-SemiBold', fontSize: 10}}>Explore</Text>
            </Pressable>
          </View>
          <Image style={styles.featuredImg} source={require('../assets/images/civic-typeR.png')}/>
        </LinearGradient>

        {/* Top Brands */}
        <View style={styles.tagContainer}>
          <Text style={styles.tagHeader}>Top Brands</Text>
          <ScrollView style={styles.tagItems} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{justifyContent: "center", alignItems: "flex-end", columnGap: 8}}>
            <BrandFilterBtn brandName={"Honda"} logo={<HondaLogo height={20} width={20} fill={'#444444'}/>}/>
            <BrandFilterBtn brandName={"Toyota"} logo={<ToyotaLogo height={20} width={20} fill={'#444444'}/>}/>
            <BrandFilterBtn brandName={"BMW"} logo={<BmwLogo height={20} width={20} fill={'#444444'}/>}/>
            <BrandFilterBtn brandName={"Mercedes"} logo={<MercedesLogo height={20} width={20} fill={'#444444'}/>}/>
            <BrandFilterBtn brandName={"Tesla"} logo={<TeslaLogo height={20} width={20} fill={'#444444'}/>}/>
            <BrandFilterBtn brandName={"Mitsubushi"} logo={<MitsubishiLogo height={20} width={20} fill={'#444444'}/>}/>
            <BrandFilterBtn brandName={"Audi"} logo={<AudiLogo height={20} width={20} fill={'#444444'}/>}/>
            <BrandFilterBtn brandName={"KIA"} logo={<KiaLogo height={20} width={20} fill={'#444444'}/>}/>
          </ScrollView>
        </View>

        {/* Top Categories */}
        <View style={styles.tagContainer}>
          <Text style={styles.tagHeader}>Top Categories</Text>
          <ScrollView style={styles.tagItems} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{justifyContent: "center", alignItems: "flex-end", columnGap: 8}}>
            <Pressable><Text style={styles.tagText}>Sedan</Text></Pressable>
            <Pressable><Text style={styles.tagText}>SUV</Text></Pressable>
            <Pressable><Text style={styles.tagText}>Hatchback</Text></Pressable>
            <Pressable><Text style={styles.tagText}>Coupe</Text></Pressable>
            <Pressable><Text style={styles.tagText}>Crossover</Text></Pressable>
            <Pressable><Text style={styles.tagText}>Pickup</Text></Pressable>
          </ScrollView>
        </View>
        
        {/* Main CTA */}
        <Pressable style={styles.mainCTA}>
          <CarIcon height={45} width={45} fill={'#fff'} style={{position: 'relative', left: 0.5}}/>
          <View><Text style={styles.info}>7</Text></View>
        </Pressable>

        


      </View>
    );
  }

const styles = StyleSheet.create({
  body: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#f8f9fd',
  },

  header1: {
    color: "#2d2d2d",
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    height: 36,
  },

  secondaryText: {
    color: '#6A6E83',
    fontFamily:'Poppins-Regular',
    fontSize: 14,
    height: 21
  },

  searchContainer: {
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 12,
  },

  filterBtn: {
    backgroundColor: '#FF2B2B',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8.5,
    marginLeft: 8, 
  },

  inputContainer: {
    height: 35,
    flex: 1,
    backgroundColor: "#d9d9d9",
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    borderRadius: 8.5,
    gap: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },

  input: { 
    height: 35,
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    borderRadius: 8.5,
    paddingVertical: 5,
  },

  featured: {
    height: 'auto',
    width: 'auto',
    borderRadius: 12.5,
    padding: 30,
    marginBottom: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },

  featuredHdr: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },

  featuredSub: {
    color: '#ffffff',
    fontSize: 9,
    fontFamily: 'Poppins-Regular',
    margin: 5
  },

  featuredBtn: {
    height: 30,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 7.5,
    marginTop: 15
  },

  featuredImg: {
    width: 160,
    height: 80,
    position: 'relative',
    left: 55
  },

  tagContainer: {
    height: "auto",
    width: "100%",
    marginBottom: 15,
  },

  tagHeader: {
    fontSize: 16,
    height: 24,
    //backgroundColor: "blue",
    fontFamily: "Poppins-SemiBold",
  },

  tagItems: {
    marginTop: 10,
    width: "auto",
  },

  tagText: {
    backgroundColor: '#d9d9d9',
    borderRadius: 8.5,
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 4,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: "#444444"
  },

  mainCTA: {
    width: 70,
    height: 70,
    backgroundColor: '#ff2b2b',
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  info: {
    width: 16.5,
    height: 16.5,
    backgroundColor: '#10E20B',
    fontSize: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    bottom: 40,
    left: 16
  }

});