import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <main className="page">
      <section className="about-page">
        <article>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <a to="/contact" className="btn">
            contact
          </a>
        </article>
        <img src="../assets/images/1.jpg" alt="about-us-image" />
      </section>
    </main>
  );
};

export default About;
