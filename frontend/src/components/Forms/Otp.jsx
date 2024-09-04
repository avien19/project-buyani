import React from "react";
import FormTemplate from "./FormTemplate";
import { formsConfig } from "../../data/FormsConfig";
import FormHero from "./FormHero";

const Otp = () => {
  const handleSubmit = (values) => {
    console.log("Otp Values:", values);
  };

  return (
    <>
      <div className="formpage">
        <div className="form-div">
          <FormTemplate {...formsConfig.otp} onSubmit={handleSubmit} />
        </div>
        <FormHero />
      </div>
    </>
  );
};

export default Otp;
