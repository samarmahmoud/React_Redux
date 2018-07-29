import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import Loginform from './components/Loginform';
import Welcomescreen from './components/InitialScreen';

const RouterComponent =()=>{

    return(
       <Router>
           <Scene key="root">
               <Scene key="Login" component={Loginform} title="Sign in"/>
               
               <Scene key="Welcome" component={Welcomescreen}/>
            </Scene>
      </Router>
    );
};

export default RouterComponent;