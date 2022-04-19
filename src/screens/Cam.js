import React from 'react';
import{
    SafeAreaView,
    Image,
    Text,
    StatusBar,
    Platform,
} from 'react-native';
import{
    launchCamera,
    launchImageLibrary,
} from 'react-native-image-picker'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function Cam() {
    const [ImageCam, setImageCam] = React.useState(null)
    const openCamera=()=>{
    
        const option = {
            mediaType : 'photo',
            quality : 1,
            includeExtra:true,
            saveToPhotos:true,
        }
        launchCamera (option,(res)=>{
            if(res.didCancel){
                console.log("Pengambilan gambar di cancel")
            }
            else if(res.errorCode){
                console.log(res.errorMessage)
            }
            else{
                const data = res.assets[0]
                setImageCam(data)
                console.log(data)
                console.log(data.timestamp)
            }
        })
    }
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center', paddingTop:Platform.OS=='android'?StatusBar.height:0}}>
            <Image 
                source={{uri:ImageCam===null?'../images/home/logo.png':ImageCam.uri}}
                style={{height: 75, width:'80%'}}/>
            <Pressable
                style={{padding:10,margin:10,backgroundColor:"skyblue"}}
                onPress={openCamera}>
                <Text>Open Camera</Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default Cam;