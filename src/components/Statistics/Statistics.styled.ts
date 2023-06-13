import styled from "styled-components";

import { flexSpBetween, rem } from "@styles/Utilities.styled";


export const StyledStatistics = styled.section`
  padding-block: 3rem;
  margin-top: 7rem;
  background-color: hsla(210, 55%, 98%, 1);

  .content {
    ${flexSpBetween}
    gap: 5rem;
  }

  .left-section {
  }

  .right-section {
    display: flex;
    gap: 4rem;

    .stat {
      h3 {
        font-size: ${rem(32)};
        font-weight: 600;
      }

      p {
        font-size: ${rem(14)};
        max-width: 15ch;
      }
    }
  }
`;
