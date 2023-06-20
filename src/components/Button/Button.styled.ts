import styled from "styled-components";

import { theme } from "@styles/Utilities.styled";


export const StyledPrimaryButton = styled.button`
  padding: 0.8em 2.7em;
  color: ${theme.colors.white};
  font-weight: 500;
  background-color: ${theme.colors.primary300};
  border-radius: 100vmax;
`;

export const StyledTertiaryButton = styled.a`
  color: ${theme.colors.primary300};
  font-weight: 500;
`;
