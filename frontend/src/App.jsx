import { useState } from "react";
import "../src/styles/sass/App.scss";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/Forms/Signup";
import Signin from "./components/Forms/Signin";
import ForgotPassword from "./components/Forms/ForgotPassword";
import Otp from "./components/Forms/Otp";
import VerifyEmail from "./components/Forms/VerifyEmail";
import VerifyOtp from "./components/Forms/VerifyOtp";
import Home from "./pages/Home";
import FormHero from "./components/Forms/FormHero";
import PreSurvey from "./pages/Pre-survey";
import Survey from "./pages/Survey";
import WelcomeMessage from "./pages/WelcomeMessage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/presurvey" element={<PreSurvey />} />
          <Route path="/question/:id" element={<Survey />} />
          <Route path="/welcomeMessage" element={<WelcomeMessage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
