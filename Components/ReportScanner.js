import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ImagePickerCompo from "./ImagePicker";
import Camera  from "./Camera"

// import { Camera } from 'expo-camera';
import { Link } from "react-router-native";

// import { useHistory } from "react-router-native";

const ReportScanner = () => {

    return (
        <SafeAreaView style={styles.prim_container}>
            <Text style={styles.titleText}>
                Medicodgns
            </Text>
            <View style={styles.sec_container}>
                <Camera />
                <ImagePickerCompo />
                <Link to="/Home"
                    style={styles.navItem}
                    underlayColor="#f0f4f7">
                    <Text style={{ color: "blue" }}>Move Back</Text>
                </Link>
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