import "./Login.css"
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  }
    return (
 <div className="login-box">
      <div className="login-details">
        <h1> Login Page </h1>
        <form onSubmit={handleSubmit}>
          <label> Email: </label>
          <input type="email" name="email" placeholder="Enter your email" />
          <br />
          <label> Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <br />
          <button type="submit"> Login </button><br>
          </br>
          <h2 className="ask" style={{color : "blue"}}>new user? <a href="/signup">Sign up</a></h2>
        </form>
      </div>
    </div>
    )
}

export default Login;