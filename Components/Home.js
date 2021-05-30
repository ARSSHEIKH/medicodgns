import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Link, useHistory } from "react-router-native";

const Home = () => {
    let history = useHistory()
    return (
        <SafeAreaView style={styles.prim_container}>
            <Text style={styles.titleText}>
                Medicodgns
            </Text>
            <View style={styles.sec_container}>
                <Button mode="contained" style={styles.btnUploadReport}
                    onPress={() => history.push("/ReportScanner")}
                >
                    Upload Report
            </Button>
                <Button mode="contained" style={styles.btnHistory} onPress={() => console.log('View History')}>
                    View History
            </Button>

                <Link to="/"
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
export default Home