import React, { useState } from "react";
import InputField from "../reusable/inputField";
import "./index.css";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
const mapStateToProps = state => {
  return {
    subscribedUser: state.subscribedUser,
    loginForm: state.loginForm
  };
};

const Login = ({ subscribedUser, loginForm, ...props }) => {
  const [loginUserNameAndPassword, setLoginUserNameAndPassword] = useState({});
  const history = useHistory();

  const checkValidation = UserDetail => {
    debugger;
    let userName = UserDetail.userName;
    if (!userName) {
      alert("please enter user name");
      return false;
    } else if (!subscribedUser[userName]) {
      alert("user is not present in DB");
      return false;
    } else if (
      subscribedUser[userName] &&
      subscribedUser[userName].password != UserDetail.password
    ) {
      alert("please enter correct password");
      return false;
    } else {
      return true;
    }
  };

  const goToWelcomePage = () => {
    if (checkValidation(loginUserNameAndPassword)) {
      debugger;
      let path = `welcome`;
      history.push(path);
    }
  };

  const onInputChange = e => {
    let tagName = e.target.name;
    let value = e.target.value;
    let copyOfLoginUserNameAndPassword = { ...loginUserNameAndPassword };
    copyOfLoginUserNameAndPassword[tagName] = value;
    setLoginUserNameAndPassword(copyOfLoginUserNameAndPassword);
  };


  return (
    <div className = "login-container-wrapper">
      <label className="login-header">User Login</label>
      <InputField
        goToWelcomePage={goToWelcomePage}
        onInputChange={onInputChange}
        inputProps={loginForm}
        userInput={loginUserNameAndPassword}
      />
      <div className="login-button-container">
        <button onClick={goToWelcomePage}>Login</button>
        <Link className="link-wrapper" to="/registration">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Login);
