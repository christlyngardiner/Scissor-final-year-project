import { PrimaryButton } from "@components/Button";

import { Container } from "@styles/components/Container.styled";
import { SectionHeading } from "@styles/components/SectionHeading.styled";

import { StyledPreFooter } from "./PreFooter.styled";


export const PreFooter = () => {
  return (
    <StyledPreFooter>
      <Container>
        <SectionHeading>Revolutionizing Link Optimization</SectionHeading>
        <PrimaryButton>Get Started</PrimaryButton>
      </Container>
    </StyledPreFooter>
  );
};
