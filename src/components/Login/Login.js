import { useHistory } from "react-router-dom";
import TelegramLoginButton from "react-telegram-login";

import "./Login.scss";

const Login = () => {
  const history = useHistory();

  const handleTelegramResponse = () => {
    history.push(`/covid19/dashboard`);
    localStorage.setItem("userLoginStatus", true);
  };
  return (
    <div className="login">
      <div className="login-center">
        <h1>COVID19 APP</h1>
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="covid19LoginBot"
        />
      </div>
    </div>
  );
};

export default Login;
