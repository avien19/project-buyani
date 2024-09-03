import { CiMail, CiLock, CiUnlock, CiPhone, CiUser } from "react-icons/ci";

export const formsConfig = {
  signUp: {
    fields: [
      {
        name: "username",
        type: "text",
        placeholder: "Username",
        icon: <CiUser />,
      },
      {
        name: "email",
        type: "email",
        placeholder: "Enter your email",
        icon: <CiMail />,
      },
      {
        name: "mobilenumber",
        type: "text",
        placeholder: "Enter your phone number",
        icon: <CiPhone />,
      },
      {
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        icon: <CiUnlock />,
      },
      {
        name: "confirmpassword",
        type: "password",
        placeholder: "Confirm your password",
        icon: <CiLock />,
      },
    ],
    formType: "signUp",
  },
  signIn: {
    fields: [
      {
        name: "email",
        type: "email",
        placeholder: "Enter your email",
        icon: <CiMail />,
      },
      {
        name: "password",
        type: "password",
        placeholder: "Enter your password",
        icon: <CiUnlock />,
      },
    ],
    formType: "signIn",
  },
  otp: {
    fields: [
      {
        name: "mobilenumber",
        type: "text",
        placeholder: "Enter your phone number",
        icon: <CiPhone />,
      },
    ],
    formType: "otp",
  },
  verifyOtp: {
    fields: [
      {
        name: "otp",
        type: "text",
        placeholder: "Enter your OTP",
        icon: <CiUnlock />,
      },
    ],
    formType: "verifyOtp",
  },
  forgotPassword: {
    fields: [
      {
        name: "email",
        type: "email",
        placeholder: "Enter your email",
        icon: <CiMail />,
      },
    ],
    formType: "forgotPassword",
  },
  verifyEmail: {
    fields: [
      {
        name: "verificationCode",
        type: "text",
        placeholder: "Enter verification code",
        icon: <CiUnlock />,
      },
    ],
    formType: "verifyEmail",
  },
};
