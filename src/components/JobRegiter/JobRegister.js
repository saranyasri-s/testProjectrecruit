import React from "react";
import classes from "./JobRegister.module.scss";
function JobRegister() {
  return (
    <div className={classes.SignUpPage}>
      <div className={classes.background}></div>
      <form className={classes.SignUpForm}>
        <h3>Work Registration</h3>
        <label>Job type</label>
        <input type="text" placeholder="Enter Job type"></input>
        <label>Job subtype</label>
        <input type="password" placeholder="Enter Job subtype"></input>
        <label>Years of experience</label>
        <input type="number" placeholder="Enter years of experience"></input>
        <label>Location to work</label>
        <input type="text" placeholder="Enter location"></input>
        <label>Radius to work</label>
        <input type="text" placeholder="Enter radius from location"></input>
        <button>Register work</button>
      </form>
    </div>
  );
}

export default JobRegister;
