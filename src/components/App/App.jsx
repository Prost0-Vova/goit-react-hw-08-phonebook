import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import RestrictedRoute from 'components/Routes/RestrictedRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';

const Home = lazy(() => import('../../pages/Home'));
const Register = lazy(() => import('../../pages/Register'));
const Login = lazy(() => import('../../pages/Login'));
const Contacts = lazy(() => import('../../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Register />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute index element={<Navigate to="/contacts" />} component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
export default App;