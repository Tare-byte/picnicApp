import { Alert, Image, Keyboard, PermissionsAndroid, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as DocumentPicker from "expo-document-picker"
import DropDownPicker from 'react-native-dropdown-picker'

const Register = ({navigation}) => {
    const [image, setimage] = useState(null)
    const [openDropdown, setOpenDropdown] = useState(false)
    const [location, setLocation] = useState(null)
    const [items, setItems] = useState([
        {
            label:"Abuja",value:"Abuja"
        },
        {
            label:"Lagos",value:"Lagos"
        },
        {
            label:"Edo",value:"Edo"
        },
    ])
    async function checkPermission() {
        try {
            const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
            if (!result) {
                const grant=await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{
                    title:'we need access to your storage',
                    message:"app needs access to file",
                    buttonNeutral:"later",
                    buttonNegative:"cancel",
                    buttonPositive:"ok,"
                })
                if (grant=== PermissionsAndroid.RESULTS.GRANTED) {
                    return true
                } else {
                    return false
                }
            } else {
                return(true)
            }        
        } catch (error) {
            console.warn(error);
            Alert.alert("error with permission")
            return(false);
        }
        
    }
    async function uploadFile() {
        try {
            let result=Platform.OS=='ios'?true:await checkPermission();
            if (result) {
                const Getfile=await DocumentPicker.getDocumentAsync({
                    copyToCacheDirectory:false,
                    type:"image/*",
                })

                if (Getfile.type==='success') {
                    setimage(Getfile)
                } else {
                    setimage(null)
                }
            } else {
                Alert.alert("give us permission")
            }
        } catch (error) {
            console.warn(error)
            setimage(null)
        }
    }
  return (
   <SafeAreaView style={{flex:1, alignItems:"center", paddingTop: 50,}}>
    <Pressable onPress={()=>{Keyboard.dismiss();setOpenDropdown(false)}} style={{flex:1, alignItems:"center", width:"100%"}}>
      <View style={{width:"80%",marginBottom:20}}>
      <Text style={{fontFamily:"Jost_700Bold",fontSize:35,color:"#159749"}}>Welcome,</Text>
      <Text  style={{fontFamily:"Jost_500Medium",fontSize:15,color:"#159749"}}>Kindly Register to Picnic App</Text>
        </View>  
    <TouchableOpacity onPress={uploadFile} style={{backgroundColor:'grey',height:150, width:150, borderRadius:100, alignItems: 'center',justifyContent: 'center',}}>
        <Text style={{position:"absolute",color:"white",fontFamily: 'Jost_500Medium',}}>Click to upload image.</Text>
<Image source={{uri:image?image.uri:null}} style={{height:150, width:150, borderRadius:100}} />
    </TouchableOpacity>
<View style={{width:"80%",}}>
<TextInput placeholder="Full Name" autoCapitalize="words" autoComplete="name" autoFocus={true} textContentType="name" style={styles.input} />

<DropDownPicker style={styles.input} open={openDropdown} value={location} items={items} setOpen={setOpenDropdown} setValue={setLocation} setItems={setItems} />

<TouchableOpacity onPress={()=>navigation.replace("explore")} style={[styles.input,{backgroundColor:"#159749", justifyContent: 'center',alignItems: 'center',}]}>
    <Text style={{fontFamily:'Jost_500Medium', fontSize:20, color:"white"}}>Get Started</Text>
</TouchableOpacity>
</View>
</Pressable>
   </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
    input:{
        width:"100%",
        borderWidth:2,
        borderColor:"#159749",
        marginTop:40,
        height:50,
        borderRadius:10,
        fontFamily:"Jost_500Medium",
        paddingHorizontal:10,
        fontSize:20

    }
})