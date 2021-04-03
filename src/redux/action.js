import { userLogin, registration } from "./type";

export const loginUser = payload => {
  return {
    type: userLogin,
    payload: {
      loginDetail: payload
    }
  };
};
export const registrationDetail = payload => {
  return {
    type: registration,
    payload: {
      registrationDetail: payload
    }
  };
};
