import axios from 'axios';
import React, { useState } from 'react'
const Login = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const login = () => {
    axios.post("http://localhost:3001/auth/login", {
      userName: userName,
      password: password,
    }).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      }
      else {
        sessionStorage.setItem("accessToken", response.data);
        alert("Login Success");
      }
    })
  }
  return (
    <div className="loginContainer">
      <label>Username:</label>
      <input
        type="text"
        onChange={onChangeUserName}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={onChangePassword}
      />

      <button onClick={login}> Login </button>
    </div>
  )
}

export default Login
