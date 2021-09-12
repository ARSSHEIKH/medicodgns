import React, { useState, useEffect } from 'react';
import { Button, Image,Text, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useHistory } from "react-router-native";
import { GetReportImage } from "./CreateReport"
import RNTextDetector from "react-native-text-detector";

export default function ImagePickerCompo() {
  let history = useHistory()
  const [image, setImage] = useState(null);

  async function detectText() {
    try {
      const options = {
        quality: 0.8,
        base64: true,
        skipProcessing: true,
      };
      const { uri } = await this.camera.takePictureAsync(options);
      const visionResp = await RNTextDetector.detectFromUri(uri);
      console.log('visionResp', visionResp);
    } catch (e) {
      console.warn(e);
    }
  };
   detectText()
  let imgFile;
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false, //true
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      imgFile = result.uri
    }
      setImage(result.uri);
      console.log("image : ",result.uri);
  };
  return (
    <View>
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 250, height: 300 }} resizeMode={'cover'}/>}
      <Text></Text>
      <Button title="Create Report" onPress={() => {
        // <GetReportImage imgFile={imgFile} />/
        // history.push("/CreateReport")
      }} />
    </View>
  );
}
  const styles = StyleSheet.create({

  })
