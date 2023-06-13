import { StyledPrimaryButton, StyledTertiaryButton } from "./Button.styled";


type ButtonProps = {
  children: React.ReactNode;
};

export const PrimaryButton = ({ children }: ButtonProps) => {
  return <StyledPrimaryButton href="/">{children}</StyledPrimaryButton>;
};

export const TertiaryButton = ({ children }: ButtonProps) => {
  return <StyledTertiaryButton href="/">{children}</StyledTertiaryButton>;
};
