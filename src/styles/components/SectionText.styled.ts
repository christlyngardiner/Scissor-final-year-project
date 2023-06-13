import styled from "styled-components";

import { rem, theme } from "@styles/Utilities.styled";


export const SectionText = styled.p`
  margin-top: 2rem;
  color: ${theme.colors.black};
  font-size: ${rem(16)};
  text-align: center;
  max-width: 70ch;
  margin-inline: auto;
`;
