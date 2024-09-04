import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { getValidationSchema, getInitialValues } from "../../data/Validation";
import logoImage from "../../assets/logo.png";
import { FaCheck } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/sass/Form.scss";

const FormTemplate = ({ fields, onSubmit, formType }) => {
  const initialValues = getInitialValues(formType);
  const validationSchema = getValidationSchema(formType);
  const navigate = useNavigate();

  const getLinkHref = () => {
    switch (formType) {
      case "signUp":
        return "/signin";
      case "signIn":
        return "/signup";
      case "otp":
        return "/otp";
      case "verifyOtp":
        return "/verifyOtp";
      case "forgotPassword":
        return "/forgotPassword";
      case "verifyEmail":
        return "/home";
      default:
        return "#";
    }
  };

  const getPrimaryButtonLink = () => {
    switch (formType) {
      case "signUp":
        return "/presurvey";
      case "signIn":
        return "/home";
      case "otp":
        return "/verifyOtp";
      case "verifyOtp":
        return "/home";
      case "forgotPassword":
        return "/verifyEmail";
      case "verifyEmail":
        return "/home";
      default:
        return "#";
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        navigate(getPrimaryButtonLink());
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form className="form">
          <div className="form-container">
            <div className="logo-container">
              <img src={logoImage} alt="Logo" />
            </div>
            <div className="form-header">
              <span className="heading">
                {formType === "signUp"
                  ? "Create an account"
                  : formType === "signIn"
                  ? "Sign In"
                  : formType === "otp"
                  ? "Send OTP"
                  : formType === "verifyOtp"
                  ? "Enter OTP"
                  : formType === "forgotPassword"
                  ? "Forgot Password"
                  : formType === "verifyEmail"
                  ? "Verify Your Email"
                  : "Unknown Form Type"}
              </span>
              <span className="subheading">
                {formType === "signUp"
                  ? "Enter your credentials to sign up."
                  : formType === "signIn"
                  ? "Enter your credentials to sign in."
                  : formType === "otp"
                  ? "Enter mobile number to receive your one time password."
                  : formType === "verifyOtp"
                  ? "Enter the OTP sent to your mobile number to proceed"
                  : formType === "forgotPassword"
                  ? "Enter your email to reset your password."
                  : formType === "verifyEmail"
                  ? "Enter the verification code from your email."
                  : "Unknown action."}
              </span>
            </div>

            {fields.map((field) => (
              <div className="input-main-container" key={field.name}>
                <div className="input-container">
                  <div className="icon-container">{field.icon}</div>
                  <Field
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="input-field"
                  />
                </div>
                {errors[field.name] && touched[field.name] ? (
                  <div className="validation">{errors[field.name]}</div>
                ) : null}
              </div>
            ))}

            <div className="input-main-container">
              <div className="options">
                <span className="option">
                  {formType === "signUp"
                    ? "Already have an account?"
                    : formType === "signIn"
                    ? "Don't have an account?"
                    : formType === "otp"
                    ? " "
                    : formType === "verifyOtp"
                    ? "Didn't receive OTP?"
                    : formType === "forgotPassword"
                    ? ""
                    : formType === "verifyEmail"
                    ? "Didn't receive verification code?"
                    : "Unknown action."}
                </span>
                <span className="action">
                  <Link to={getLinkHref()}>
                    {formType === "signUp"
                      ? "Signin"
                      : formType === "signIn"
                      ? "Signup"
                      : formType === "otp"
                      ? " "
                      : formType === "verifyOtp"
                      ? "Resend OTP"
                      : formType === "forgotPassword"
                      ? ""
                      : formType === "verifyEmail"
                      ? "Resend code"
                      : "Unknown action."}
                  </Link>
                </span>
              </div>
            </div>

            <div className="input-main-container">
              {formType === "signIn" && (
                <button className="secondarybtn" type="button">
                  <Link className="secondarybtn-link" to="/otp">
                    Or Request OTP
                  </Link>
                </button>
              )}
              <button className="primarybtn" type="submit">
                Proceed <FaCheck />
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormTemplate;
