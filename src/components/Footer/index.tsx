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
      </ul>
          <ul className="col">
            <li className="col-heading">Solutions</li>
            <li>
              <a href="/">Social Media</a>
            </li>
            <li>
              <a href="/">Digital Marketing</a>
            </li>
            <li>
              <a href="/">Customer Service</a>
            </li>
            <li>
              <a href="/">For Developers</a>
            </li>
            
          </ul>
          <ul className="col">
            <li className="col-heading">Products</li>
            <li>
              <a href="/">Link Management</a>
            </li>
            <li>
              <a href="/">QR codes</a>
            </li>
            <li>
              <a href="/">Link in bio</a>
            </li>
        
         </ul>
          <ul className="col">
            <li className="col-heading">Company</li>
            <li>
              <a href="/">About Scissor</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Partners</a>
            </li>
            <li>
              <a href="/">Press</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <ul className="col">
            <li className="col-heading">Resources</li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Resource Library</a>
            </li>
            <li>
              <a href="/">App connectors</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Trust Center</a>
            </li>
          </ul>
          <ul className="col">
            <li className="col-heading">Features</li>
            <li>
              <a href="/">Branded links</a>
            </li>
            <li>
              <a href="/">Mobile links</a>
            </li>
            <li>
              <a href="/">Campaign</a>
            </li>
            <li>
              <a href="/">Management & analytics</a>
            </li>
            <li>
              <a href="/">QR code generation</a>
            </li>
          </ul>
          <ul className="col">
            <li className="col-heading">Legal</li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Cookie Policy</a>
            </li>
            <li>
              <a href="/">Terms of service</a>
            </li>
            <li>
              <a href="/">Acceptable Use Policy</a>
            </li>
            <li>
              <a href="/">Code of conduct</a>
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
