import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';

const Explore = () => {
  //uss for tabschangedecoration
  const [Garden, setGarden] = useState({
    color:'#159749',
    td:'underline'
  })
  const [Restaurants, setRestaurants] = useState({
    color:'grey',
    td:'none'
  })
  const [Beaches, setBeaches] = useState({
    color:'grey',
    td:'none'
  })
//func for changing tabs
  function tabsChange(type){
    let use={
      color:'#159749',
      td:'underline'
    }
    let unused={
      color:'grey',
      td:'none'
    }
    if (type=="Garden") {
      setGarden(use)
      setRestaurants(unused)
      setBeaches(unused)
    } else if (type=="Restaurants") {
      setGarden(unused)
      setRestaurants(use)
      setBeaches(unused)
    }else{
      setGarden(unused)
      setRestaurants(unused)
      setBeaches(use)
    }
  }

  // uss for gardens
  return (
    <SafeAreaView style={{flex:1, alignItems:"center",}}>
    <View style={{width:"90%",flexDirection:"row",marginTop:10}}>
<TextInput placeholder="Search for experiences" autoCapitalize="words" style={styles.input} />
<TouchableOpacity style={{position:"absolute", alignSelf:'flex-end',right:10,alignContent:'flex-end', height:'100%', justifyContent:'center', alignItems:'center' }}>
<Feather name="search" size={24} color="green" />
</TouchableOpacity>    
</View>
<View style={{width:"100%",paddingHorizontal:20,paddingTop:10}}>
<Text style={{fontFamily:"Jost_400Regular",fontSize:35}}>Explore</Text>
<Text style={{fontFamily:"Jost_700Bold",fontSize:50}}>Picnic</Text>
</View>
{/* view for tabs change */}
<View style={{width:"100%",flexDirection:"row", justifyContent:"space-between", paddingHorizontal:20}}>
<TouchableOpacity onPress={()=>tabsChange("Garden")}><Text style={[styles.text,{color:Garden.color,textDecorationLine:Garden.td}]}>Gardens</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>tabsChange("Restaurants")}><Text style={[styles.text,{color:Restaurants.color,textDecorationLine:Restaurants.td}]}>Restaurant</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>tabsChange("Beaches")}><Text style={[styles.text,{color:Beaches.color,textDecorationLine:Beaches.td}]}>Beaches</Text></TouchableOpacity>

</View>


    </SafeAreaView>
    
  )
}

export default Explore

const styles = StyleSheet.create({
    input:{
        width:"100%",
        borderWidth:1,
        borderColor:"#159749",
        // marginTop:40,
        height:50,
        borderRadius:10,
        fontFamily:"Jost_500Medium",
        paddingHorizontal:10,
        fontSize:20,
        paddingRight:40

    },
    text:{
fontFamily:"Jost_400Regular",
fontSize:25,
    }
    
})