import styled from "styled-components";

import { alignItemsCenter, rem, theme } from "@styles/Utilities.styled";


export const StyledFooter = styled.footer`
  position: relative;
  margin-top: 7rem;

  .decor {
    position: absolute;
    bottom: -3rem;
    width: ${rem(800)};

    &-1 {
      left: -13rem;
    }

    &-2 {
      right: -5rem;
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    row-gap: 2rem;

    .col {
      &-heading {
        font-weight: 600;
        margin-bottom: 1rem;
      }

      &:first-child {
        .logo {
          path {
            fill: ${theme.colors.black};

            &:nth-child(2) {
              stroke: ${theme.colors.black};
            }
          }
        }

        .social-icons {
          ${alignItemsCenter}
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
      }

      &:nth-child(6) {
        grid-column: 2/3;
        grid-row: 2/3;
      }

      &:nth-child(7) {
        grid-column: 3/4;
        grid-row: 2/3;
      }

      &:nth-child(8) {
        grid-column: 4/5;
        grid-row: 2/3;
      }
    }
  }

  .bottom {
    display: flex;
    gap: 0.5rem;
    justify-content: end;
    padding-bottom: 2rem;
    margin-top: 2rem;
    font-size: ${rem(14)};
  }
`;
