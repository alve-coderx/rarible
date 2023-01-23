import React from "react";
import Hero from "../Components/Hero";
import Main from "../Components/Main";
const Contact = () => {
  return (
    <div className="App grid lg:grid-cols-5 md:grid-cols-5 h-screen overflow-hidden">
      <Hero />
      <Main />
    </div>
  );
};

export default Contact;
