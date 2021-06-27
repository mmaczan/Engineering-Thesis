import { useEffect } from 'react';
import firebase from 'firebase';

import {firebaseConfig } from './constants';

  const databaseSuccessHandler = (
    response
  ) => {
    const values = response.val();
    return values?.users || [];
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
        // window.addEvenetListenr("click", () => {})
        
    }, [])

    return null;
}

export default Firebase