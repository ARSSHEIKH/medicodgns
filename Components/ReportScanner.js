import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import ImagePickerCompo from "./ImagePicker"
// import { Camera } from 'expo-camera';
import { Link, useHistory } from "react-router-native";

// import { useHistory } from "react-router-native";

const ReportScanner = () => {
    // let history = useHistory()
    //#region For Camera
    // const [hasPermission, setHasPermission] = useState(null);
    // const [type, setType] = useState(Camera.Constants.Type.back);
  
    // useEffect(() => {
    //   (async () => {
    //     const { status } = await Camera.requestPermissionsAsync();
    //     setHasPermission(status === 'granted');
    //   })();
    // }, []);
  
    // if (hasPermission === null) {
    //   return <View />;
    // }
    // if (hasPermission === false) {
    //   return <Text>No access to camera</Text>;
    // }
    // const snap = async () => {
    //   if (this.camera) {
    //     let photo = await this.camera.takePictureAsync();
    //     return <Text>{photo}</Text>;
    //   }
    // };
    //#endregion
    return (
        <SafeAreaView style={styles.prim_container}>
            <Text style={styles.titleText}>
                Medicodgns
            </Text>
            <View style={styles.sec_container}>
                <ImagePickerCompo/>
                <Link to="/Home"
                    style={styles.navItem}
                    underlayColor="#f0f4f7">
                    <Text style={{ color: "blue" }}>Move Back</Text>
                </Link>
            {/* for camera */}
                {/* <Camera type={type} style={{height:300}}>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <Text> Flip </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                snap
                            }}>
                            <Text> Take </Text>
                        </TouchableOpacity>
                    </View> */}
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    prim_container: {
        flex: 1
    },
    sec_container: {
        flex: 50,
        width: "70%",
        justifyContent: 'center',
        marginLeft: 55,
    },
    btnUploadReport: {
        padding: 20,
        backgroundColor: "blue",
        margin: 5
    },
    btnHistory: {
        padding: 20,
        backgroundColor: "grey",
        margin: 5
    },
    titleText: {
        fontSize: 30,
        color: "blue",
        fontWeight: "bold",
        textAlign: "center",
        top: 80
    },
    navItem: {
        padding: 10
    },
});
export default ReportScanner