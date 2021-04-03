import React, { useState } from "react";
import "./index.css";
const InputField = ({
  inputProps,
  userInput,
  onInputChange,
  onSubmit,
  subscribedUser,
  errorMsg,
  ...props
}) => {
  const getInputTextTypeDom = value => {
    return (
      <>
        <td>{inputProps?.[value]?.lable}</td>
        <td>
          <input
          placeholder={inputProps?.[value]?.placeholder}
            required
            type={inputProps?.[value]?.inputType}
            onChange={onInputChange}
            name={inputProps?.[value]?.tagName}
            value={userInput[value]}
          />
        </td>
      </>
    );
  };
  const getRadioButtonTypeDom = value => {
    debugger
    return (
      <>
        <td>
          <label>{value} :</label>
        </td>
        <td>
          {inputProps[value].value.map(lable => {
            return (
              <>
                <input
                  type="radio"
                  value={lable}
                  name={value}
                  checked={lable == userInput[value]}
                  onChange={onInputChange}
                />
                <lable>{lable}</lable>
              </>
            );
          })}
        </td>
      </>
    );
  };

  return (
    <div>
      <table>
        {Object.keys(inputProps).map(value => {
          return (
            <tr className="input-form-container">
              {inputProps[value].type == "editableRadioButton"
                ? getRadioButtonTypeDom(value)
                : getInputTextTypeDom(value)}
            </tr>
          );
        })}
      </table>
      {errorMsg?.length > 0 && (
        <div className="error-container">
          {errorMsg.map(value => {
            return (
              <div>
                <span>* {value}</span>
              </div>
            );
          })}
        </div>
      )}
     
    </div>
  );
};

export default InputField;
