import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./header";
import Services from "./services";
import AddinsCardsLinks from "./cards";
import About from "./about";
import Team from "./team";
import ContactUs from "./contactUs";
import Footer from "./footer";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/agency.min.css";

function Landing() {
  const addinsCardsLinks = [
    {
      title: "Addin Form",
      caption: "Illustration",
    },
    {
      title: "Explore",
      caption: "Graphic Design",
    },
    {
      title: "Finish",
      caption: "Identity",
    },
    {
      title: "Lines",
      caption: "Branding",
    },
    {
      title: "Southwest",
      caption: "Website Design",
    },
    {
      title: "Window",
      caption: "Photography",
    },
  ];

  return (
    <div>
      <Header />
      <Services />
      <AddinsCardsLinks addinsCardsLinks={addinsCardsLinks}></AddinsCardsLinks>
      <About />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default Landing;
