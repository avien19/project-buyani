import React from "react";
import FormTemplate from "./FormTemplate";
import { formsConfig } from "../../data/FormsConfig";
import FormHero from "./FormHero";

const ForgotPassword = () => {
  const handleSubmit = (values) => {
    console.log("Forgot Password Values:", values);
  };

  return (
    <>
      <div className="formpage">
        <div className="form-div">
          <FormTemplate
            {...formsConfig.forgotPassword}
            onSubmit={handleSubmit}
          />
        </div>
        <FormHero />
      </div>
    </>
  );
};

export default ForgotPassword;
