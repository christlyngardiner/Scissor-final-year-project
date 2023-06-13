import styled from "styled-components";

import { alignItemsCenter, rem } from "@styles/Utilities.styled";


export const StyledHero = styled.section`
  margin-top: 8rem;

  .main-heading {
    line-height: 1.5;
    font-size: ${rem(48)};
    font-weight: 600;
    max-width: 50ch;
    margin-inline: auto;
    text-align: center;

    .stroke-text {
      position: relative;

      svg {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .summary {
    margin-top: 3rem;
  }

  .button-group {
    ${alignItemsCenter}
    gap: 3rem;
    width: fit-content;
    margin-top: 4rem;
    margin-inline: auto;
  }
`;
