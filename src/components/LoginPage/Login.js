import React from "react";
import classes from "./Login.module.scss";
function Login() {
  return (
    <div className={classes.SignUpPage}>
      <div className={classes.background}></div>
      <form className={classes.SignUpForm}>
        <h3>Login Form</h3>
        <label>Login Id</label>
        <input type="text" placeholder="Enter login id"></input>
        <label>Password</label>
        <input type="password" placeholder="Enter password"></input>
        <button>Login</button>
        <p>
          Not registered ?{" "}
          <span style={{ color: "rgb(208, 43, 141)", cursor: "pointer" }}>
            {" "}
            SignUp now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
