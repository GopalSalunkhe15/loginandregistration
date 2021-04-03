import { userLogin, registration } from "./type";

const initialState = {
  registrationWithInputFeild: {
    userName: {
      type: "editableText",
      lable: "Please Enter Name :",
      inputType: "text",
      tagName: "userName",
      placeholder: "Enter User Name",
      validations: [
        {
          type: "nonEmpty",
          msg: "please enter __FIELD_TITLE__"
        }
      ]
    },
    mobileNumber: {
      type: "editableText",
      lable: "Please Enter Number :",
      inputType: "number",
      tagName: "mobileNumber",
      placeholder: "Enter Mobile Number",
      validations: [
        {
          type: "regex",
          value: "^((\\+){1}91){1}[1-9]{1}[0-9]{9}$",
          msg: "please enter number in +91XXXXXXXXXX format"
        }
      ]
    },
    address: {
      type: "editableText",
      lable: "Please Enter Address :",
      inputType: "textarea",
      tagName: "address",
      placeholder: "Enter Address",
      validations: [
        {
          type: "nonEmpty",
          msg: "please enter __FIELD_TITLE__"
        }
      ]
    },
    password: {
      type: "editableText",
      lable: "Please Enter Password :",
      inputType: "password",
      tagName: "password",
      placeholder: "Enter Password",
      validations: [
        {
          type: "nonEmpty",
          msg: "please enter __FIELD_TITLE__"
        }
      ]
    },
    Gender: {
      type: "editableRadioButton",
      value: ["male", "female", "other"],
      checkedValue: "male"
    }
  },
  loginForm: {
    userName: {
      lable: "Please Enter User Name :",
      inputType: "text",
      tagName: "userName",
       placeholder: "Enter User Name",
    },
    password: {
      lable: "Please Enter Password :",
      inputType: "password",
      tagName: "password",
      placeholder: "Enter Password",
    }
  },
  subscribedUser: {
    "javascript": {
      userName: "javacript",
      password: 1234567
    }
  }
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case userLogin:
      return state;
    case registration:
      state.subscribedUser[
        (action?.payload?.registrationDetail?.userName)
      ] = {
        userName: action?.payload?.registrationDetail?.userName,
        password: action?.payload?.registrationDetail?.password
      };
      return state;

    default:
      return state;
  }
};

export default LoginReducer;
