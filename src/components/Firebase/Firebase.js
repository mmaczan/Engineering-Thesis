import { useEffect } from 'react';
import firebase from 'firebase';

import {firebaseConfig } from './constants';

const getData = (values) => {
    const keys = Object.keys(values);
    const data = [];
  
    for (let i = 0; i < keys.length; i++) {
      data.push(values[keys[i]]);
    }
    return data;
  };
  
  const databaseSuccessHandler = (
    response
  ) => {
    const values = response.val();
    return getData(values || {});
  };

  const databaseErrorHandler = (error) => {
    // eslint-disable-next-line
    console.error(error);
  };

const Firebase = ({ setData }) => {
    useEffect(() => {
        // init
        firebase.initializeApp(firebaseConfig);

        // connect
         firebase
        .database()
        .ref()
        .on(
          'value',
          (response) => setData(databaseSuccessHandler(response)),
          databaseErrorHandler
        );
        
    }, [])

    return null;
}

export default Firebase