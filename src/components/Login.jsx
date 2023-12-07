import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const Login = ({ handleLogin = (f) => f }) => {
  // Set states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(" ");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverURL = `http://localhost:5000/api/login`;
    try {
      const response = await axios.post(
        serverURL,
        {
          email: email.toLocaleLowerCase(),
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);
      if (data.token) {
        // console.log(data.token);
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("username", data.username);
        console.log(localStorage.getItem("userToken"));
        setMessage(``);
        alert("Back to Sharing");
        navigate("/");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log(`error getting the server data ${error}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" onSubmit={handleSubmit}>
          Login
        </button>
      </form>
      {message ? <h1>{message}</h1> : <></>}
    </div>
  );
};

export default Login;
