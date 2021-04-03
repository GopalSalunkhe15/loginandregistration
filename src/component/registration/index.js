import React, { useState } from "react";
import { connect } from "react-redux";
import RegistrationWithInput from "../reusable/registrationWithInputField";
import { registrationDetail } from "../../redux/action";
import { Link, useHistory } from "react-router-dom";

import "./index.css";
const mapDispatchtoProps = dispatch => {
  return {
    registrationDetail: e => {
      dispatch(registrationDetail(e));
    }
  };
};

const mapStateToProps = state => {
  return {
    registrationDetail: state.registrationDetail,
    registrationForm: state.registrationWithInputFeild,
    inputWithRadioButton: state.inputWithRadioButton,
    subscribedUser: state.subscribedUser
  };
};

const Registration = ({
  inputWithRadioButton,
  registrationForm,
  subscribedUser,
  ...props
}) => {
  const [registrationDetail, setRegistrationDetail] = useState({
    Gender: registrationForm.Gender.checkedValue
  });
  const [errorMsg, setErrorMsg] = useState([]);
  const history = useHistory();

  const onInputChange = e => {
    let tagName = e.target.name;
    let value = e.target.value;
    let copyOfRegistrationDetail = { ...registrationDetail };
    copyOfRegistrationDetail[tagName] = value;
    setRegistrationDetail(copyOfRegistrationDetail);
  };

  const signUpAccount = () => {
    debugger;
    if (validateRegistrationDetail()) {
      props.registrationDetail(registrationDetail);
      setRegistrationDetail({});
      let path = `login`;
      history.push(path);
    }
  };

  const validateRegistrationDetail = () => {
    let errorArray = [];

    Object.keys(registrationForm).some(value => {
      if (subscribedUser?.[registrationDetail?.userName]) {
        errorArray.push("user is already present");
      } else if (!registrationDetail?.[value]) {
        let error = registrationForm?.[value]?.validations?.[0]?.msg;
        errorArray.push(error.replace("__FIELD_TITLE__", value));
      }
    });
    if (errorArray.length) {
      setErrorMsg([...new Set(errorArray)]);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="registration-container-wrapper">
      <label className="registration-lable">Registration Form</label>
      <RegistrationWithInput
        onInputChange={onInputChange}
        inputProps={registrationForm}
        userInput={registrationDetail}
        onSubmit={signUpAccount}
        subscribedUser={subscribedUser}
        errorMsg={errorMsg}
      />
      <div className="registration-button-container">
        <button onClick={signUpAccount}>Sign Up</button>
        {}
        <Link className="login-link-wrapper" to="/login">
          log in
        </Link>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Registration);
