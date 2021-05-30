import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Alert } from 'react-native';
import { Checkbox, TextInput, Button } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { Link } from "react-router-native";
import { firebaseConfig } from "../config"

const showAlert = () =>
    Alert.alert(
        "Alert Title",
        "Please fill out all required fields",
        [
            {
                text: "Cancel",
                style: "cancel",
            },
        ],
    );
export default function Signup() {
    const [checked, setChecked] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState('*');
    const [passwordErrorText, setPasswordErrorText] = useState('*');
    const [confPasswordErrorText, setConfPasswordErrorText] = useState('*');
    const [date_dob, setDate_dob] = useState("");

    const [userValues, setUserValues] = React.useState({
        username: '',
        email: "",
        dob: "",
        password: '',
        confPass: '',
        // showPassword: false,
        // showConfPassword: false,
        verified: false
    });

    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setconfPassword] = useState('');

    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (text === "") {
            setEmailErrorText("*")
        }
        else if (reg.test(text) === false) {
            setEmailErrorText("Email format is Not Correct");
            return false;
        }
        else {
            setText(text)
            setEmailErrorText("");
        }
    }

    const passValidate = (pass) => {
        if (pass.length < 6)
            setPasswordErrorText("Password Must be 6 characters long");
        else {
            setPasswordErrorText("*")
            setPassword(pass)
        }

    }
    const confpassValidate = (pass) => {
        if (password !== pass)
            setConfPasswordErrorText("Password Not Match");
        else
            setConfPasswordErrorText("*")
        setconfPassword(pass)
    }
    const usernameHandleChange = (name) => {
        setUsername(name)
    };
    const UserRegisteration = () => {
        setUserValues({
            username: username,
            email: text,
            dob: date_dob,
            password: password,
            confPass: confpassword,
            // showPassword: false,
            // showConfPassword: false,
            verified: false

        })
        if (
            userValues.username === "" ||
            userValues.email === "" ||
            userValues.dob === "" ||
            userValues.password === "" ||
            userValues.confPass === ""
        ) {
            showAlert()
        }
        else {
            console.log(userValues)
            firebaseConfig.database().ref('medicalPatients').orderByChild('email').equalTo(userValues.email).on("value", function (snapshot) {
                if (snapshot.val() !== null) {
                    Alert.alert(
                        "Alert Title",
                        "Email Address is in use",
                        [
                            {
                                text: "Cancel",
                                style: "cancel",
                            },
                        ],
                    );
                }
                else {
                    firebaseConfig.auth().createUserWithEmailAndPassword(userValues.email, userValues.password)
                        .then((userCredential) => {
                            firebaseConfig.database().ref('/medicalPatients/user' + (userCredential.user.uid)).update(userValues)
                                .then((result) => {
                                    console.log("result", result);

                                    Alert.alert(
                                        "Alert Title",
                                        "Your are now registered !",
                                        [
                                            {
                                                text: "Cancel",
                                                style: "cancel",
                                            },
                                        ],
                                    );
                                    // setRefForm(
                                    //   <div style={{ visibility: formDisabler }}>
                                    //     <h4>Please Verify Your Email Address to Process</h4>
                                    //     <button onClick={sendingVerification}>Verify Email</button>
                                    //   </div>
                                    // )
                                    // sendingVerification()

                                })
                                .catch((error) => {
                                    Alert.alert(
                                        "Alert Title",
                                        error.message,
                                        [
                                            {
                                                text: error.message,
                                                style: "cancel",
                                            },
                                        ],
                                    );
                                });
                        })


                }

                return
            })

        }
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "blue",
                    marginTop: 40,
                    textAlign: "center"
                }}>
                    Create Your New Account</Text>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.containerView}>
                        <Text style={styles.errorText}>*</Text>
                        <TextInput
                            style={{ width: 300 }}
                            label="Full Name"
                            onChangeText={(text) => usernameHandleChange(text)}
                        />
                        <Text style={styles.errorText}>{emailErrorText}</Text>
                        <TextInput
                            style={{ width: 300 }}
                            label="Email"
                            onChangeText={(text) => validate(text)}
                        />
                        <Text style={styles.errorText}>*</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                            <Text>DOB: </Text>
                            <DatePicker
                                style={styles.datePickerStyle}
                                date={date_dob} // Initial date from state
                                mode="date" // The enum of date, datetime and time
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="01-01-1950"
                                maxDate="31-12-2021"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        //display: 'none',
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                    },
                                }}
                                onDateChange={(date) => {
                                    setDate_dob(date);
                                }} />
                        </View>
                        <Text style={styles.errorText}>{passwordErrorText}</Text>
                        <TextInput
                            style={{ width: 300 }}
                            label="Password"
                            keyboardType="Password"
                            secureTextEntry={true}
                            onChangeText={(pass) => passValidate(pass)}
                        />
                        <Text style={styles.errorText}>{confPasswordErrorText}</Text>
                        <TextInput
                            style={{ width: 300 }}
                            label="Confirm Password"
                            keyboardType="Password"
                            secureTextEntry={true}
                            onChangeText={(pass) => confpassValidate(pass)}
                        />
                        <Text style={styles.errorText}>*</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={{ marginTop: 5 }}> Agree with privacy policy</Text>
                        </View>
                        <Button
                            style={styles.btnSignUp}
                            mode="contained"
                            onPress={() => UserRegisteration()}
                        >
                            Create
                        </Button>

                        <Link to="/"
                            style={styles.navItem}
                            underlayColor="#f0f4f7">
                            <Text style={{ color: "blue" }}> Already registered ?</Text>
                        </Link>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
    },
    containerView: {
        flex: 1,
        width: "70%",
        justifyContent: 'center',
        marginLeft: 20
    },
    heading: {
        flex: 1,
        top: 40,
        left: 60,
        textAlign: 'center',
    },
    scrollView: {
        marginHorizontal: 10,
    },
    navItem: {
        padding: 10
    },
    errorText: {
        color: "red"
    },
    
    btnSignUp:{
        backgroundColor: "blue",
        // margin:10,
        marginLeft: 70,
    }
});
