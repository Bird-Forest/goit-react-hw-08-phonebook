// import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

// ******************************************

// export function PrivateRoute({
//   component: Component,
//   isAuthenticated,
//   ...rest
// }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// }

//  <PrivateRoute
//   path="/dashboard"
//   component={Dashboard}
//   isAuthenticated={isAuthenticated}
// />;
