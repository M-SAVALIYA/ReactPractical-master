import React, { useRef } from "react";
import { FaUser } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import Box from "@mui/material/Box";

const Login = () => {
  let name = useRef();
  let password = useRef();

  let handleLogin = () => {
    let data = {
      name: name.current.value,
      password: password.current.value,
    };
    if (name == 'admin' && password == 123) {
    //   window.location.href("/");
    console.log("hello");
    }
  };
  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100vh",
          backgroundColor: "#141414",
        }}
      >
        <div className="grid">
          <form
            action="https://httpbin.org/post"
            method="POST"
            className="form login"
          >
            <div className="form__field">
              <label htmlFor="login__username">
                <FaUser />
                <span className="hidden">Username</span>
              </label>
              <input
                autoComplete="username"
                id="login__username"
                type="text"
                ref={name}
                name="username"
                className="form__input"
                placeholder="Username"
                required
              />
            </div>

            <div className="form__field">
              <label htmlFor="login__password">
                <PiPasswordBold />
                <span className="hidden">Password</span>
              </label>
              <input
                id="login__password"
                type="password"
                name="password"
                className="form__input"
                placeholder="Password"
                ref={password}
                required
              />
            </div>

            <div className="form__field">
              <input type="submit" onClick={handleLogin} value="Sign In" />
            </div>
          </form>
        </div>
      </Box>
    </>
  );
};

export default Login;
