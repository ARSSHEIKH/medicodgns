import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import VerificationPage  from "./Pages/VerificationPage";

const Routes = () => {
    return (
        <>
            <Router>
                <Route path="/VerificationPage" component={VerificationPage} />
            </Router>
        </>
    )
}
export default Routes