import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Signup from "./Signup"
import Login from "./Login"
import Home  from "./Home"
import ReportScanner  from "./ReportScanner"
import CreateReport  from "./CreateReport"
import VerificationPage  from "./VerificationPage"
import SplashScreen  from "./SplashScreen"
const Routes = () => {
    return (
        <>
            <NativeRouter>
                {/* <Route exact path="/" component={SplashScreen} />
                <Route path="/Login" component={Login} />
                <Route path="/Signup" component={Signup} />
                <Route path="/Home" component={Home} /> */}
                <Route exact path="/" component={ReportScanner} />
                <Route path="/CreateReport" component={CreateReport} />
                <Route path="/VerificationPage" component={VerificationPage} />
                {/* <Route path="/Camera" component={Camera} /> */}
            </NativeRouter>
        </>
    )
}
export default Routes