import styled from "styled-components";

import {
  alpha,
  flexColumn,
  flexSpBetween,
  pseudo,
  rem,
  theme,
} from "@styles/Utilities.styled";


export const StyledFAQ = styled.section`
  margin-top: 3rem;

  h2 {
    width: fit-content;
    margin-inline: auto;
    text-align: center;
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

  .faqs {
    ${flexColumn}
    gap: 1.5rem;
    max-width: ${rem(792)};
    margin-inline: auto;
    margin-top: 6rem;

    &-item {
      padding-bottom: 1rem;
      border-bottom: 1px solid hsl(0, 0%, 84%);
    }

    .header {
      ${flexSpBetween}
      h3 {
        font-weight: 400;
      }
    }

    .body {
      margin-top: 1.5rem;
      font-size: ${rem(15)};
    }
  }
`;
