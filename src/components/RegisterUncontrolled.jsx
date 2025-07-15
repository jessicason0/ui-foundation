import React, { useEffect, useState } from "react";

function RegisterUncontrolled() {
  const [isMatched, setIsMatched] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username;
    const password = e.target["password"];
    const confirmPassword = e.target["confirm-password"];

    if (password.value !== confirmPassword.value) {
      setIsMatched(false);
      return;
    }

    const user = { username, password };
    postRegister(user);
  }

  function postRegister(data) {
    alert("success");
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="register__content">
          <label>
            Username
            <input
              type="text"
              placeholder="username"
              autoComplete="off"
              name="username"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="password"
              autoComplete="off"
              name="password"
              required
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              placeholder="confirm password"
              autoComplete="off"
              name="confirm-password"
              required
            />
          </label>
        </div>
        <div className="register__error">
          {!isMatched && `Your passwords do not match.`}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default RegisterUncontrolled;
