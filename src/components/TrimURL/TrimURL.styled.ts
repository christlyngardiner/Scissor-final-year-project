import styled from "styled-components";

import { flexCenter, rem, theme } from "@styles/Utilities.styled";

import BgImage from "@assets/bg.png";


export const StyledTrimURL = styled.section`
  padding-block: 5rem;
  margin-top: 7rem;
  background: url(${BgImage}) no-repeat center/ cover;

  .content {
    width: ${rem(476)};
    margin-inline: auto;
    padding: 2.5rem 2.5rem 3.5rem;
    background-color: ${theme.colors.white};
    border-radius: ${rem(15)};

    .group {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;

      & > input {
        flex-basis: 50%;
      }
    }

    .input-wrapper {
      position: relative;
      width: fit-content;

      svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 1rem;

        path {
          stroke: ${theme.colors.primary300};
        }
      }
    }

    input {
      width: 100%;
      padding: 1em 1em 1em 1.75em;
      color: ${theme.colors.primary400};
      border-radius: ${rem(10)};
      outline: 1px solid ${theme.colors.primary300};

      &::placeholder {
        color: ${theme.colors.primary300};
      }
    }

    .cta {
      ${flexCenter}
      gap: 0.5rem;
      width: 100%;
      margin-top: 2rem;
    }

    .footer-text {
      font-size: ${rem(14)};
      color: ${theme.colors.primary100};
      margin-top: 2rem;

      a {
        font-weight: 600;
        color: ${theme.colors.primary300};
      }
    }
  }
`;
