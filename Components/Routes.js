import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Signup from "./Signup"
import Login from "./Login"
import Home  from "./Home"
import ReportScanner  from "./ReportScanner"
import CreateReport  from "./CreateReport"
import VerificationPage  from "./VerificationPage"

const Routes = () => {
    return (
        <>
            <NativeRouter>
                <Route exact path="/" component={Login} />
                <Route path="/Signup" component={Signup} />
                <Route path="/Home" component={Home} />
                <Route path="/ReportScanner" component={ReportScanner} />
                <Route path="/CreateReport" component={CreateReport} />
                <Route path="/VerificationPage" component={VerificationPage} />
            </NativeRouter>
        </>
    )
}
export default Routes