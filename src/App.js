import classes from "./App.module.scss";
import JobRegister from "./components/JobRegiter/JobRegister";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignupPage/SignUp";
import { Routes, Route } from "react-router";
function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route exact path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/registerwork"
          element={<JobRegister></JobRegister>}
        ></Route>
      </Routes>
      {/* <LandingPage></LandingPage> */}
      {/* <SignUp></SignUp> */}
      {/* <Login></Login> */}
      {/* <JobRegister></JobRegister> */}
    </div>
  );
}

export default App;
