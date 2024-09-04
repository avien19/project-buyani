import * as Yup from "yup";

export const getValidationSchema = (formType) => {
  switch (formType) {
    case "signUp":
      return Yup.object().shape({
        username: Yup.string()
          .required("Username is required.")
          .max(50, "Username must be less than 50 characters."),
        email: Yup.string()
          .required("Email address is required")
          .email("Invalid email address"),
        mobilenumber: Yup.string()
          .required("Phone number is required")
          .min(11, "Phone number must be at least 11 characters")
          .max(13, "Phone number must be at most 13 characters"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters"),
        confirmpassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm password is required."),
      });
    case "signIn":
      return Yup.object().shape({
        email: Yup.string()
          .required("Email address is required")
          .email("Invalid email address"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters"),
      });
    case "otp":
      return Yup.object().shape({
        mobilenumber: Yup.string()
          .required("Phone number is required")
          .min(11, "Phone number must be at least 11 characters")
          .max(13, "Phone number must be at most 13 characters"),
      });
    case "verifyOtp":
      return Yup.object().shape({
        otp: Yup.string()
          .required("OTP is required")
          .length(6, "OTP must be 6 characters"),
      });
    case "forgotPassword":
      return Yup.object().shape({
        email: Yup.string()
          .required("Email address is required")
          .email("Invalid email address"),
      });
    case "verifyEmail":
      return Yup.object().shape({
        verificationCode: Yup.string()
          .required("Verification code is required")
          .length(6, "Verification code must be 6 characters"),
      });
    default:
      return Yup.object().shape({});
  }
};

export const getInitialValues = (formType) => {
  switch (formType) {
    case "signUp":
      return {
        username: "",
        email: "",
        mobilenumber: "",
        password: "",
        confirmpassword: "",
      };
    case "signIn":
      return {
        email: "",
        password: "",
      };
    case "otp":
      return {
        mobilenumber: "",
      };
    case "verifyOtp":
      return {
        otp: "",
      };
    case "forgotPassword":
      return {
        email: "",
      };
    case "verifyEmail":
      return {
        verificationCode: "",
      };
    default:
      return {};
  }
};
