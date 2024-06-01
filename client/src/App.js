import './App.css';
import Messenger from './Components/Login/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '587918699355-flloq7i9tcdv308fk8kc9oq3lovp77i2.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>

    </GoogleOAuthProvider>
  );
}

export default App;
