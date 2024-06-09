import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import CoverPage from './pages/cover'
import HomePage from './pages/home'

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return(
    <NavigationContainer initialRouteName="Cover">
      <Stack.Navigator>
        <Stack.Screen name="Cover" options={{headerShown: false}} component={CoverPage}/>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}