import React from "react";
import FormTemplate from "./FormTemplate";
import { formsConfig } from "../../data/FormsConfig";
import FormHero from "./FormHero";

const Signin = () => {
  const handleSubmit = (values) => {
    console.log("Signin values:", values);
  };

  return (
    <>
      <div className="formpage">
        <div className="form-div">
          <FormTemplate {...formsConfig.signIn} onSubmit={handleSubmit} />
        </div>
        <FormHero />
      </div>
    </>
  );
};

export default Signin;
