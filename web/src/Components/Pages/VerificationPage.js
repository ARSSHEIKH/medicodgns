import React, { useState } from "react";
import { firebaseConfig as firebase } from "../../config";

export default function VerificationPage() {
    const [values, setValues] = React.useState({
        email: '',
    });

    document.title = "Account Verification";
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(setValues)
    };

    const verificationSubmit = (values) => (e) => {
        e.preventDefault();
        console.log(values)
        sendingVerification(values.email)
    }
    const sendingVerification = (email) => {
        console.log(email)
        var actionCodeSettings = {
            url: 'http://localhost:3002/VerificationPage',
            handleCodeInApp: true,
        };
        firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
                alert("Mail has been send to email address")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }

    function emailLinkComplete() {
        if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
            var email = window.localStorage.getItem('emailForSignIn');
            console.log(email)
            if (!email) {
                return
            }
            else {
                // console.log(firebase.database().ref('medicalPatients').orderByChild("email").equalTo(email))
                firebase.database().ref('medicalPatients').orderByChild('email').equalTo(email).once("value", function (snapshot) {
                    const getVal = snapshot.val();
                    console.log(snapshot)
                    const getId = Object.keys(getVal)
                    firebase.database().ref(`medicalPatients/${getId}`).update({ verified: true, id: getId })
                        .then(() => {
                            alert("Now you are verified, Now you can Login")
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
            }
        }
    }
    emailLinkComplete()
    return (
        <div>
            <h4>Please Verify your Account</h4>
            <form onSubmit={verificationSubmit(values)}>
                <label for="email">Email address</label>
                <input
                    id="email"
                    type="email"
                    aria-describedby="my-helper-text"
                    required
                    onChange={handleChange('email')}
                />
                <br />
                <button type="Submit">Login</button>
            </form>
        </div>
    )
}