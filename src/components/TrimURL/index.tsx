import { PrimaryButton } from "@components/Button";

import { Container } from "@styles/components/Container.styled";

import { ReactComponent as ArrowDown } from "@assets/arrow-down.svg";
import { ReactComponent as MagicWand } from "@assets/magic-wand.svg";

import { StyledTrimURL } from "./TrimURL.styled";


export const TrimURL = () => {
  return (
    <StyledTrimURL>
      <Container>
        <div className="content">
          <input type="text" placeholder="Paste URL here..." />
          <div className="group">
            <div className="input-wrapper">
              <input type="text" placeholder="Choose Domain" />
              <ArrowDown />
            </div>
            <input type="text" placeholder="Type alias here" />
          </div>
          <PrimaryButton className="cta">
            <span>Trim URL</span> <MagicWand />
          </PrimaryButton>
          <p className="footer-text">
            By clicking TrimURL, I agree to the <a href="/">Terms of Service</a>
            , <a href="/">Privacy Policy</a>
            and Use of Cookies.
          </p>
        </div>
      </Container>
    </StyledTrimURL>
  );
};
