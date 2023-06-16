import styled from "styled-components";

import {
  flexColumn,
  flexSpBetween,
  pseudo,
  rem,
  theme,
} from "@styles/Utilities.styled";


export const StyledFAQ = styled.section`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 8rem;
  overflow: hidden;

  .decor {
    position: absolute;

    &-1 {
      top: 0;
      left: 0;
      width: ${rem(300)};
    }

    &-2 {
      bottom: -20rem;
      right: 0;
      width: ${rem(300)};
    }
  }

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
