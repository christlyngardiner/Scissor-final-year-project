import { StyledPrimaryButton, StyledTertiaryButton } from "./Button.styled";


type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const PrimaryButton = ({ children, className }: ButtonProps) => {
  return (
    <StyledPrimaryButton href="/" className={className}>
      {children}
    </StyledPrimaryButton>
  );
};

export const TertiaryButton = ({ children, className }: ButtonProps) => {
  return (
    <StyledTertiaryButton href="/" className={className}>
      {children}
    </StyledTertiaryButton>
  );
};
