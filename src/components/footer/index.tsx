import React from "react";
import { FooterContainer, StyledButton } from "./style";

export const Footer = () => {
  return (
    <FooterContainer>
      <section>
        <div>
          <h1>Navigation</h1>
          <a>Home</a>
          <a>About</a>
          <a>Log in</a>
          <a>Sign up</a>
        </div>
        <div>
          <h1>Useful links</h1>
          <a>Services</a>
          <a>Support</a>
          <a>Terms &amp; Conditions</a>
          <a>Privacy Policy</a>
        </div>
        <div>
          <h1>Subscribe to Newsletter</h1>
          <StyledButton variant="transparent">Subscribe</StyledButton>
          <h1>Contact us</h1>
          <a>flashyourcard@gmail.com</a>
        </div>
      </section>
    </FooterContainer>
  );
};
