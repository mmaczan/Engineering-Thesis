import React, { useState } from 'react';
import { Home, Login, Register,ResetPassword,ForgotPassword, Bmi, Bmr, Measurement,NewResult, MyCalendar} from './pages';
import { NavbarLoggedOut, NavbarLogged,} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Firebase from './components/Firebase/Firebase';

const Backgraund = styled.div`
 background: linear-gradient(97.55deg, #FAE303 50%, rgba(255, 255, 253, 0.00729179) 50.83%, rgba(255, 255, 255, 0) 96.6%), #343434;
 min-height: 100vh;
  @media screen and (max-width: 1299px){
    background: #343434;
  }
`;

function App() {
  var tokken =true;
  const [data, setData] = useState([]);

  return (

   <Router>
     <Firebase setData={setData}/>
     <GlobalStyle/>
     <Backgraund>
      {tokken ? <NavbarLogged/> : <NavbarLoggedOut/>}
      <Switch>
      <Route path="/" exact render={(props) => (<Home data={data} {...props}/>)} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/resetPassword" component={ResetPassword} />
      <Route path="/bmi" component={Bmi} />
      <Route path="/bmr" component={Bmr} />
      <Route path="/measurement" component={Measurement} />
      <Route path="/newresult" component={NewResult} />
      <Route path="/myCalendar" component={MyCalendar} />
      </Switch>
     </Backgraund>
   </Router>
    
  );
}

export default App;
