import { PrimaryButton, TertiaryButton } from "@components/Button";

import { ColoredText } from "@styles/components/ColoredText.styled";
import { Container } from "@styles/components/Container.styled";
import { SectionText } from "@styles/components/SectionText.styled";

import HeroImageBottom from "@assets/hero-image-bottom.png";
import HeroImageTop from "@assets/hero-image-top.png";
import { ReactComponent as Stroke } from "@assets/stroke.svg";

import { StyledHero } from "./Hero.styled";


export const Hero = () => {
  return (
    <StyledHero>
      <div className="blur blur-1" aria-hidden></div>
      <div className="blur blur-2" aria-hidden></div>
      <div className="blur blur-3" aria-hidden></div>
      <Container>
        <h1 className="main-heading">
          Optimize Your Online Experience with Our Advanced{" "}
          <ColoredText className="stroke-text">
            URL Shortening <Stroke />
          </ColoredText>{" "}
          Solution
        </h1>

        <SectionText className="summary">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </SectionText>

        <div className="button-group">
          <PrimaryButton>Sign Up</PrimaryButton>
          <TertiaryButton>Learn More</TertiaryButton>
        </div>
      </Container>

      <img className="decor-1" src={HeroImageTop} alt="" />
      <img src={HeroImageBottom} alt="" />
    </StyledHero>
  );
};
