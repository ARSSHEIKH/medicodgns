import React, { useState, useEffect } from 'react';
import { Button, Image,Text, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useHistory } from "react-router-native";
import { GetReportImage } from "./CreateReport"

export default function ImagePickerCompo() {
  let history = useHistory()
  const [image, setImage] = useState(null);
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
    console.log(result.uri)
    if (!result.cancelled) {
      imgFile = result.uri
    }
      setImage(result.uri);
      console.log("image : ",image)
  };
  return (
    <View>
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 250, height: 300 }} resizeMode={'cover'}/>}
      <Text></Text>
      <Button title="Create Report" onPress={() => {
        <GetReportImage imgFile={imgFile} />
        history.push("/CreateReport")
      }} />
    </View>
  );
}
  const styles = StyleSheet.create({

  })
