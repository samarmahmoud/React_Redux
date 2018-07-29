import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import Loginform from './components/Loginform';
import Welcomescreen from './components/Splash';
import HomeScreen from './components/HomeScreen'
const RouterComponent =()=>{

    return(
       <Router>
           <Scene key="root" hideNavBar>
              <Scene key="spalsh">
                 <Scene key="Welcome" component={Welcomescreen}  hideNavBar initial/>
              </Scene>
             <Scene key="auth">
               <Scene key="Login" component={Loginform} title="Sign in"/>
               <Scene key="MainPage" component={HomeScreen} />
             </Scene>
            </Scene>
           
      </Router>
     
     
    );
};

export default RouterComponent;