import React from "react"
import { Button, Image, View, Text } from 'react-native';
import { useHistory } from "react-router-native";
import TextRecognizing from "./OCRComponent"


let imgFileUrl;
export function GetReportImage({imgFile}){
    console.log("imgFile", imgFileUrl)
    imgFileUrl=imgFile;
    return(
        
        <TextRecognizing imageSource={imgFile}/>
    )
}
export default function CreateReport() {
    let history = useHistory()
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Some Text</Text>
        <View>
        <TextRecognizing imageSource={imgFileUrl}/>
        </View>
        {imgFileUrl && <Image source={{ uri: imgFileUrl }} style={{ width: 200, height: 200 }} />}
        <Button title="Back" onPress={() => 
          history.push("/ReportScanner")
        }/>
    </View>
    )
}


