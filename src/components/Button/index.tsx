import { ButtonHTMLAttributes } from "react";

import { StyledPrimaryButton, StyledTertiaryButton } from "./Button.styled";


type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const PrimaryButton = ({
  children,
  className,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledPrimaryButton className={className} {...rest}>
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
