import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts,Jost_400Regular,Jost_500Medium,Jost_700Bold} from "@expo-google-fonts/jost"
import Onboard from './screens/onboarding';
import Register from './screens/register';
import Explore from './screens/explore';

const Stack=createNativeStackNavigator()

export default function App() {
  let [Fontsloaded]=useFonts({
    Jost_400Regular,Jost_500Medium,Jost_700Bold
  })
  
  if (!Fontsloaded) {
    return null
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='explore'>
          <Stack.Screen name='onboardingScreen' component={Onboard} options={{headerShown:false}}/>
          <Stack.Screen name='register' component={Register} options={{headerShown:false}}/>
          <Stack.Screen name='explore' component={Explore} options={{headerShown:false}}/>


        </Stack.Navigator>
        <StatusBar theme='dark' />
      </NavigationContainer>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
