import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Login() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </>
    </HelmetProvider>
  );
}

export default Login;