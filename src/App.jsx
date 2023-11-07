import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from 'hooks';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';
import Loading from 'components/Loader/Loading';
import { WrapContainair } from 'App.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { refreshUser } from 'redux/auth/operations';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  console.log(isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <WrapContainair>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Routes>
      </Suspense>
    </WrapContainair>
  );
}

// {/* <Routes>
//   {appRoutes.map(({ path, element }) => (
//     <Route key={path} path={path} element={element} />
//   ))}
// </Routes>; */}
