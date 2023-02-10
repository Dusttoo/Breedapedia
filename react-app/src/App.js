import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import Header from './components/header/Header';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/user/UsersList';
import User from './components/user/User';
import { authenticate } from './store/session';
import Dashboard from './components/dashboard/Dashboard';
import AllDogs from './components/dogs/AllDogs';
import ViewDog from './components/dogs/ViewDog';
import Landing from './components/landing/Landing';
import PassReset from './components/auth/PassReset';
import UpdatePass from './components/auth/UpdatePassword'
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/password-reset' exact={true}>
          <PassReset />
        </Route>
        <Route path='/password-reset/:token' exact={true}>
          <UpdatePass />
        </Route>
        <Route path='/dogs' exact={true}>
          <AllDogs />
        </Route>
        <Route path='/dogs/:id' exact={true}>
          <ViewDog />
        </Route>
        <Route path='/' exact={true}>
          <Landing />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/dashboard' exact={true} >
          <Dashboard/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
