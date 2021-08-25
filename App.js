import React from 'react';
import SplashScreen from "./Components/SplashScreen"
import Login from "./Components/Login"
// import Signup from "./Components/Signup"
import Routes from "./Components/Routes"

// "package": "com.mypackage.coolapp",
// "googleServicesFile": "./google-services.json",
export default function App() {
  const [screen, setScreen] = React.useState(<Routes />)
    


  return (
    <>
      {screen}
    </>
  );
}