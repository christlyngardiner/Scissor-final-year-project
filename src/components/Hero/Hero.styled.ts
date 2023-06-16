import styled from "styled-components";

import { alignItemsCenter, rem, size } from "@styles/Utilities.styled";


export const StyledHero = styled.section`
  margin-top: 8rem;
  position: relative;

  .blur {
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    filter: blur(270px);

    &-1 {
      top: -10rem;
      left: 20vw;
      ${size(rem(215))}
      background-color: hsl(0, 95%, 43%);
    }

    &-2 {
      top: -10rem;
      left: 40vw;
      ${size(rem(215))}
      background-color: hsla(121, 90%, 25%, 1);
    }

    &-3 {
      top: 0rem;
      right: 6rem;
      ${size(rem(300))}
      background-color: hsla(50, 83%, 52%, 1);
      filter: blur(320px);
    }
  }

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

  .decor-1 {
    width: ${rem(700)};
    margin-top: 4rem;
    margin-inline: auto;
  }
`;
