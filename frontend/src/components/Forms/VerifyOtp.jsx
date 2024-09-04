import React from "react";
import FormTemplate from "./FormTemplate";
import { formsConfig } from "../../data/FormsConfig";
import FormHero from "./FormHero";

const VerifyOtp = () => {
  const handleSubmit = (values) => {
    console.log("Verify OTP Form Values:", values);
  };

  return (
    <>
      <div className="formpage">
        <div className="form-div">
          <FormTemplate {...formsConfig.verifyOtp} onSubmit={handleSubmit} />
        </div>
        <FormHero />
      </div>
    </>
  );
};

export default VerifyOtp;
