import { Container } from "@styles/components/Container.styled";

import DecorLeft from "@assets/decor-footer-left.png";
import DecorRight from "@assets/decor-footer-right.png";
import { ReactComponent as Facebook } from "@assets/facebook.svg";
import { ReactComponent as Instagram } from "@assets/instragram.svg";
import { ReactComponent as LinkedIn } from "@assets/linkedin.svg";
import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as Twitter } from "@assets/twitter.svg";

import { StyledFooter } from "./Footer.styled";


export const Footer = () => {
  return (
    <StyledFooter>
      <img className="decor decor-1" src={DecorLeft} alt="" />
      <Container>
        <div className="content">
          <div className="col">
            <Logo className="logo" />
            <div className="social-icons">
              <Twitter />
              <Instagram />
              <LinkedIn />
              <Facebook />
            </div>
          </div>
          <ul className="col">
            <li className="col-heading">Why Scissor?</li>
            <li>
              <a href="/">Scissor 101</a>
            </li>
            <li>
              <a href="/">Integrations & API</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
          <ul className="col">
            <li className="col-heading">Why Scissor?</li>
            <li>
              <a href="/">Scissor 101</a>
            </li>
            <li>
              <a href="/">Integrations & API</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
          <ul className="col">
            <li className="col-heading">Why Scissor?</li>
            <li>
              <a href="/">Scissor 101</a>
            </li>
            <li>
              <a href="/">Integrations & API</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
          <ul className="col">
            <li className="col-heading">Why Scissor?</li>
            <li>
              <a href="/">Scissor 101</a>
            </li>
            <li>
              <a href="/">Integrations & API</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
          <ul className="col">
            <li className="col-heading">Why Scissor?</li>
            <li>
              <a href="/">Scissor 101</a>
            </li>
            <li>
              <a href="/">Integrations & API</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
          <ul className="col">
            <li className="col-heading">Why Scissor?</li>
            <li>
              <a href="/">Scissor 101</a>
            </li>
            <li>
              <a href="/">Integrations & API</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
          <ul className="col">
            <li className="col-heading">Why Scissor?</li>
            <li>
              <a href="/">Scissor 101</a>
            </li>
            <li>
              <a href="/">Integrations & API</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <p>Terms of Service</p>
          <p>|</p>
          <p>Security</p>
          <p>|</p>
          <p>Scissor 2023</p>
        </div>
      </Container>
      <img className="decor decor-2" src={DecorRight} alt="" />
    </StyledFooter>
  );
};
