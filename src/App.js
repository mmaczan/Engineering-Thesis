import React from 'react';
import { Home, Login, Register, Bmi, Bmr, Measurement,NewResult} from './pages';
import { NavbarLoggedOut, NavbarLogged,} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

const Backgraund = styled.div`
 background: linear-gradient(97.55deg, #FAE303 50%, rgba(255, 255, 253, 0.00729179) 50.83%, rgba(255, 255, 255, 0) 96.6%), #343434;
 min-height: 100vh;
  @media screen and (max-width: 1299px){
    background: #343434;
  }
`;

function App() {
  var tokken =true;
  return (

   <Router>
     <GlobalStyle/>
     <Backgraund>
      {tokken ? <NavbarLogged/> : <NavbarLoggedOut/>}
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/bmi" component={Bmi} />
      <Route path="/bmr" component={Bmr} />
      <Route path="/measurement" component={Measurement} />
      <Route path="/newresult" component={NewResult} />
      </Switch>
     </Backgraund>
   </Router>
    
  );
}

export default App;
