import Onboarding from "react-native-onboarding-swiper";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Onboard = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white",}}> 
    <Text style={{fontFamily:"Jost_700Bold",fontSize:40,position:"absolute",marginTop:'20%',zIndex:2,width:"100%",textAlign:"center"}}>Picnic App</Text>
    <Onboarding 
    titleStyles={{fontFamily:'Jost_700Bold',fontSize:23}}
    subTitleStyles={{fontFamily:'Jost_500Medium',fontSize:15}}
    bottomBarColor="#159749"
    // bott
    // ref={onboardingRef}
    showNext={false}
    DoneButtonComponent={({})=><TouchableOpacity onPress={()=>navigation.replace('register')} ><Text style={[styles.btn,{marginLeft:0,marginRight:20}]}>Done</Text></TouchableOpacity>}
    skipLabel='Skip'
    SkipButtonComponent={()=><TouchableOpacity onPress={()=>navigation.replace("register")}><Text style={styles.btn}>Skip</Text></TouchableOpacity>}
    // NextButtonComponent={}
    onSkip={()=>navigation.replace("register")}
    onDone={()=>navigation.replace("register")}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image style={{width:"90%", height:400}} resizeMode='contain' source={require('../assets/picnicspot.jpg')} />,
        title: 'Find and unlock new experiences',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image: <Image style={{width:"90%", height:400}} source={require('../assets/friendspicnicking.jpg')} />,
        title: 'Find and unlock new experiences',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image: <Image style={{width:"90%", height:400}} source={require('../assets/eiffeltower.jpg')} />,
        title: 'Find and unlock new experiences',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

    ]}
  />
  </SafeAreaView>
  )
}

export default Onboard

const styles = StyleSheet.create({
  btn:{
    marginLeft:20, backgroundColor:'white',elevation:5, padding:5, borderRadius:10, fontFamily:'Jost_500Medium',
    width:52,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  }
})
/*{<Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('./images/circle.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    ...
  ]}
/>
}*/
