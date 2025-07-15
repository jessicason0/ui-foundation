import React, { useEffect, useState } from "react";

function RegisterControlled() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
    "confirm-password": "",
  });
  const [isMatched, setIsMatched] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (user.password !== user["confirm-password"]) return;

    postRegister(user);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (user.password === "" || user["confirm-password"] === "") {
      setIsMatched(true);
    } else if (user.password === user["confirm-password"]) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  });

  function postRegister(data) {
    alert(`Username: ${data.username}, Password: ${data.password}`); // object -> write in string with object data
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
              //   onChange={(e) => handleUsername(e)}
              onChange={(e) => handleChange(e)}
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
              //   onChange={(e) => handlePassword(e)}
              onChange={(e) => handleChange(e)}
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
              //   onChange={(e) => handleConfirmPassword(e)}
              onChange={(e) => handleChange(e)}
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

export default RegisterControlled;
