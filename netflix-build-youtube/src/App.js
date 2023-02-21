import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);
  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged( (userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
      <Routes>
        {!user ? (
          < Route 
            path = '/'
            element={< LoginScreen/>}
          />
        ) : ( 
          <>
            <Route 
              path='/'
              element={< HomeScreen />}
            />
            < Route 
                path='profile'
                element={< ProfileScreen />}
                />
          </>
          )} 
       </Routes>
      </Router>
    </div>
  );
}

export default App;
