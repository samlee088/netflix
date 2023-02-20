import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const user = null;

  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged( userAuth => {
      if(userAuth) {
        console.log(userAuth)
      } else {

      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          < LoginScreen />
        ) : ( <Routes>
          <Route 
            path='/'
            element={< HomeScreen />}
          />
        </Routes>)} 
      </Router>
    </div>
  );
}

export default App;
