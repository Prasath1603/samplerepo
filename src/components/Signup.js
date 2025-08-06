import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="login-box">
      <div className="login-details">
        <h1> Signup Page </h1>
        <form onSubmit={handleSubmit}>
          <label> UserName : </label>
          <input
            type="username"
            name="username"
            placeholder="Enter your username"
          />
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
          <button type="submit"> Login </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
