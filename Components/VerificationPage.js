import React from "react"
import { firebaseConfig as firebase } from "../config"
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Linking } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Link, browserHistory } from "react-router-native";


export default function VerificationPage() {
// console.log(_retrieveData())

// const classes = useStyles();
const [emailVal, setEmailVal] = React.useState();
const [emailErrorText, setEmailErrorText] = React.useState();

// document.title = "Account Verification";
const handleChange = (email) => {
    setEmailVal(email);
    console.log(emailVal)
};
const validateEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email === "") {
        setEmailErrorText("")
    }
    else if (reg.test(email) === false) {
        setEmailErrorText("Email format is Not Correct");
        return false;
    }
    else {
        setEmailErrorText("");
    }
}

const verificationSubmit = (values) => {
    console.log(values)
    Linking.openURL("http://localhost:3000/VerificationPage")
    // sendingVerification(values)
}
// const sendingVerification = (email) => {
//     console.log(email)
//     var actionCodeSettings = {
//         url: 'http://localhost:3000/VerificationPage',
//         handleCodeInApp: true,
//     };
//     firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
//         .then(() => {
//             window.localStorage.setItem('emailForSignIn', email);
//             alert("Mail has been send to email address")
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorCode)
//             console.log(errorMessage)
//         });
// }

function emailLinkComplete() {
//     if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
//         var email = window.localStorage.getItem('emailForSignIn');
//         console.log(email)
//         if (!email) {
//             return
//         }
//         else {
//             firebase.database().ref('storeUsers').orderByChild('email').equalTo(email).on("value", function (snapshot) {
//                 const getVal = snapshot.val();
//                 const getId = Object.keys(getVal)
//                 console.log(getVal)
//                 firebase.database().ref(`storeUsers/${getId}`).update({ verified: true, id: getId })
//                     .then(() => {
//                         window.location.replace("/login")
//                         window.localStorage.removeItem("emailForSignIn");
//                     })
//                     .catch((err) => {
//                         console.log(err)
//                         console.log(err)
//                     })
//             })
//         }
//     }
}
// emailLinkComplete()
return (
    <>
        <SafeAreaView>
             <Text>{emailErrorText}</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "blue",
                marginTop: 40,
                textAlign: "center"
            }}>Please Verify your Account</Text>
        </SafeAreaView>

        <TextInput
            style={{
                width: 300,
                margin: 30
            }}
            label="Email"
            value={emailVal}
        onChangeText={(email) => {
            validateEmail(email)
            handleChange(email)
        }}
        />
        <Button
            style={{
                margin: 30,
            }}
            // to="/Home"
            mode="contained"
        onPress={() =>
            verificationSubmit(emailVal)
        }
        >
            Verify
            </Button>

        <Link to="/"
            // style={styles.navItem}
            underlayColor="#f0f4f7">
            <Text style={{ color: "blue" }}>Move Back</Text>
        </Link>
        {/* <form className={classes.root} onSubmit={verificationSubmit(values)}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input
                        id="my-input"
                        type="email"
                        aria-describedby="my-helper-text"
                        required
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <br />
                <Button type="Submit" variant="contained" color="primary">Login</Button>
            </form> */}
    </>
)
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,

    },
});
}