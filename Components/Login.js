import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Link, useHistory } from "react-router-native";
import { firebaseConfig as firebase } from "../config"
import "firebase/auth";

export default function Login() {
    let history = useHistory()
    const [emailErrorText, setEmailErrorText] = React.useState('');
    const [passwordErrorText, setPasswordErrorText] = React.useState('');
    const [text, setText] = React.useState();
    const [password, setPassword] = React.useState();


    const UserLogin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var starCountRef = firebase.database().ref(`medicalPatients/user${userCredential.user.uid}/verified`)

                starCountRef.on('value', function (getVerified) {

                    const getVerification = getVerified.val();

                    if (getVerification === true) {
                        setEmailErrorText("Login Successfully")
                    }
                    else if (getVerification === false) {
                        setEmailErrorText("Account is not Verified !! Wait ....")
                        // Linking.openURL("http://localhost:3000/VerificationPage")
                        // history.push("/VerificationPage")
                        history.push("/Home")
                    }
                })
                setPasswordErrorText("")

            })
            .catch((error) => {
                var errorCode = error.code;

                if (errorCode === "auth/user-not-found") {
                    setEmailErrorText("No such User in the record !");
                }
                else if ("The password is invalid or the user does not have a password.") {
                    setEmailErrorText("Password is invalid")
                }
                else {
                    setPasswordErrorText("")
                }
            });
    }


    const validateEmail = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (email === "") {
            setEmailErrorText("")
        }
        else if (reg.test(email) === false) {
            setEmailErrorText("Email format is Not Correct");
            setPasswordErrorText("")
            return false;
        }
        else {
            setEmailErrorText("");
        }
    }
    const handleChange = (pass) => {
        setPassword(pass)
    }
    const handleChangeEmail = (email) => {
        setText(email)
    }

    return (
        <>
            <SafeAreaView style={styles.mainContainer}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "blue",
                    marginTop: 40,
                    textAlign: "center"
                }}>Login To Your Account</Text>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <Text>{emailErrorText}</Text>
                        <TextInput
                            style={{ width: 300 }}
                            label="Email"
                            value={text}
                            onChangeText={(email) => {
                                validateEmail(email)
                                handleChangeEmail(email)
                            }}
                        />
                        <Text>{passwordErrorText}</Text>
                        <TextInput
                            style={{ width: 300 }}
                            label="Password"
                            keyboardType="Password"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(pass) => handleChange(pass)}
                        />
                        <Button
                            style={{
                                marginTop: 10,
                                marginLeft: 50
                            }}
                            to="/Home"
                            mode="contained"
                            style={styles.btnLogin}
                            onPress={() =>
                                UserLogin(text, password)
                                // history.push("/Home")
                            }
                        >
                            Login
                        </Button>
                        <Button mode="text" onPress={() => console.log('Pressed')}>
                            forget password
                        </Button>
                        <Link to="/Signup"
                            style={styles.navItem}
                            underlayColor="#f0f4f7">
                            <Text style={{ color: "blue" }}>Not have Account</Text>
                        </Link>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,

    },
    container: {
        flex: 1,
        width: "80%",
        justifyContent: 'center',
        marginLeft: 25,
        top: 0,
        height: 400,
    },
    navItem: {
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    scrollView: {
        marginHorizontal: 5,
    },
    btnLogin:{
        backgroundColor: "blue",
        margin:20,
        marginLeft: 30,
    }
});
