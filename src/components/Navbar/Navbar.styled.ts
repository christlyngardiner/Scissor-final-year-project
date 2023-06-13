import styled from "styled-components";

import {
  alignItemsCenter,
  flexSpBetween,
  theme,
} from "@styles/Utilities.styled";


export const StyledNavbar = styled.nav`
  margin-top: 1rem;

  .content {
    ${flexSpBetween}

    .section {
      ${alignItemsCenter}
      gap: 2.5rem;

      li {
        a {
          ${alignItemsCenter}
          gap: 0.5rem;

          &.active {
            color: ${theme.colors.primary300};
          }
        }
      }
    }
  }
`;
