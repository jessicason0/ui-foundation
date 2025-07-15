import React from "react";

function Login() {
  return (
    <div className="login">
      <h3>Login</h3>
      <form>
        <div className="login__content">
          <label>
            Email Address
            <input type="text" placeholder="Enter email..." />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter password..." />
          </label>
        </div>
        <label className="login__remember">
          <input type="checkbox" />
          Remember email & password
        </label>
        <button>LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
