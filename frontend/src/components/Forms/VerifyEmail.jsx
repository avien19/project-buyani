import React from "react";
import FormTemplate from "./FormTemplate";
import { formsConfig } from "../../data/FormsConfig";
import FormHero from "./FormHero";
const VerifyEmail = () => {
  const handleSubmit = (values) => {
    console.log("Verify Email Form Values:", values);
  };

  return (
    <>
      <div className="formpage">
        <div className="form-div">
          <FormTemplate {...formsConfig.verifyEmail} onSubmit={handleSubmit} />
        </div>
        <FormHero />
      </div>
    </>
  );
};

export default VerifyEmail;
