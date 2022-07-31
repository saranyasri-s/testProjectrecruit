import React from "react";
import classes from "./SignUp.module.scss";
function SignUp() {
  return (
    <div className={classes.SignUpPage}>
      <div className={classes.background}></div>
      <form className={classes.SignUpForm}>
        <h3>Signup Form</h3>
        <label>Login Id</label>
        <input type="text" placeholder="Enter login id"></input>
        <label>Password</label>
        <input type="password" placeholder="Password"></input>
        <label>Confirm Password</label>
        <input type="password" placeholder="Re-enter password"></input>
        <label>First name</label>
        <input type="text" placeholder="First name"></input>
        <label>Last name</label>
        <input type="text" placeholder="Last name"></input>
        <label>Middle name</label>
        <input type="text" placeholder="Middle name"></input>

        <label>Phone Number</label>
        <input type="number" className={classes.phoneEmailInput}></input>
        <span className={classes.verify}> Click to verify phone number</span>
        <label>Email</label>
        <input type="email" className={classes.phoneEmailInput}></input>
        <span className={classes.verify}>Click to verify email</span>
        <label>Address </label>
        <textarea type="text"></textarea>
        <label>Country</label>
        <input placeholder="Country" type="text"></input>
        <label>Pincode</label>
        <input type="number" placeholder="Pincode"></input>
        <button>Sign up</button>
        <p>
          Registered already?
          <span style={{ color: "rgb(208, 43, 141)", cursor: "pointer" }}>
            Login now
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
