import { PrimaryButton, TertiaryButton } from "@components/Button";

import { Container } from "@styles/components/Container.styled";

import { ReactComponent as ArrowDown } from "@assets/arrow-down.svg";
import { ReactComponent as Logo } from "@assets/logo.svg";

import { StyledNavbar } from "./Navbar.styled";


export const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <div className="content">
          <div className="section">
            <Logo />
          </div>
          <ul className="section">
            <li>
              <a href="/" className="active">
                My URLs
              </a>
            </li>
            <li>
              <a href="/">
                <span>Features</span>
                <ArrowDown />
              </a>
            </li>
            <li>
              <a href="/">My URLs</a>
            </li>
            <li>
              <a href="/">My URLs</a>
            </li>
            <li>
              <a href="/">My URLs</a>
            </li>
          </ul>
          <ul className="section">
            <li>
              <TertiaryButton>Log in</TertiaryButton>
            </li>
            <li>
              <PrimaryButton>Try for free</PrimaryButton>
            </li>
          </ul>
        </div>
      </Container>
    </StyledNavbar>
  );
};
