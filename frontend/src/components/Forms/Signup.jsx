import React from "react";
import FormTemplate from "./FormTemplate";
import { formsConfig } from "../../data/FormsConfig";
import FormHero from "./FormHero";

const SignUp = () => {
  const handleSubmit = (values) => {
    console.log("Sign-Up Form Values:", values);
  };

  return (
    <>
      <div className="formpage">
        <div className="form-div">
          <FormTemplate {...formsConfig.signUp} onSubmit={handleSubmit} />
        </div>
        <FormHero />
      </div>
    </>
  );
};

export default SignUp;
