import { Link } from "react-router-dom";
import useNavigationHook from "../../shared/hooks/useNavigationHook";

function Login() {
  const { naviToAboutPage } = useNavigationHook();

  return (
    <div>
      <h1>Login</h1>
      <div>
        <button onClick={naviToAboutPage}>Go to About page</button>
      </div>
      <div>
        <Link to="/confidential">Confidential link</Link>
      </div>
    </div>
  );
}

export default Login;
