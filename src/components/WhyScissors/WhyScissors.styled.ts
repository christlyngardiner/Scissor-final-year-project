import styled from "styled-components";

import { flexSpBetween, pseudo, rem, theme } from "@styles/Utilities.styled";


export const StyledWhyScissors = styled.section`
  margin-top: 7rem;

  .content {
    ${flexSpBetween}
    align-items: start;
    gap: 5rem;
  }

  .left-section {
    h2 {
      position: relative;

      &::before {
        ${pseudo}
        top: 0;
        left: -1.5rem;
        width: 6px;
        height: 100%;
        background: linear-gradient(
          to bottom,
          ${theme.colors.black},
          rgb(0, 0, 0, 0)
        );
      }
    }
    .summary {
      text-align: left;
      max-width: 38ch;
    }
  }

  .right-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem 2.5rem;

    .feature {
      h3 {
        margin-top: 1.5rem;
        font-size: ${rem(30)};
        font-weight: 600;
      }

      p {
        margin-top: 1rem;
        max-width: 30ch;
      }
    }
  }
`;
