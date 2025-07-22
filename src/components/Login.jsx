import React, { useEffect, useRef, useState } from "react";

const users = [
  { id: 1, username: "sunil", password: "111", color: "purple" },
  { id: 2, username: "jessica", password: "222", color: "orange" },
  { id: 3, username: "emily", password: "333", color: "red" },
];

function serverFetch({ username, password }) {
  return new Promise((res, rej) => {
    const user = users.find((item) => {
      return username === item.username && password === item.password;
    });

    if (user) {
      res({ message: "successfully logged in.", status: 200, data: user });
    } else {
      rej({ message: "user and password are not matching.", status: 404 });
    }
  });
}

function Login() {
  //   const [inputVal, setInputVal] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const usernameRef = useRef();
  const passwordRef = useRef();

  function handleSumbit(e) {
    e.preventDefault();
    setError(null);
    setUser(null);
    serverFetch({ username, password })
      .then((data) => setUser(data.data))
      .catch((err) => {
        setError(err.message);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleUncontrolledSubmit(e) {
    e.preventDefault();
    // method 1 ref
    // console.log(usernameRef.current.value);
    // console.log(passwordRef.current.value);

    const username = e.target.username;
    const password = e.target.password;

    serverFetch({
      username: username.value,
      password: password.value,
    })
      .then((data) => setUser(data.data))
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <div className="login">
      <h3>Login</h3>
      {user && user.color}
      {error && error}

      <form onSubmit={handleUncontrolledSubmit}>
        <div className="login__content">
          <label>
            Username
            <input
              type="text"
              placeholder="Enter username..."
              onChange={handleChange}
              name="username"
              ref={usernameRef}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter password..."
              onChange={handleChange}
              name="password"
              ref={passwordRef}
            />
          </label>
        </div>
        <label className="login__remember">
          <input type="checkbox" />
          Remember me
        </label>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
