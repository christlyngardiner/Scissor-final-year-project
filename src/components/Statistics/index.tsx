import { ColoredText } from "@styles/components/ColoredText.styled";
import { Container } from "@styles/components/Container.styled";
import { SectionHeading } from "@styles/components/SectionHeading.styled";

import { StyledStatistics } from "./Statistics.styled";


export const Statistics = () => {
  return (
    <StyledStatistics>
      <Container>
        <div className="content">
          <div className="left-section">
            <SectionHeading>One Stop.</SectionHeading>
            <SectionHeading>
              Four <ColoredText>Possibilities</ColoredText>.
            </SectionHeading>
          </div>
          <div className="right-section">
            <div className="stat">
              <h3>3M</h3>
              <p>Active users</p>
            </div>
            <div className="stat">
              <h3>60M</h3>
              <p>Links & QR codes created</p>
            </div>
            <div className="stat">
              <h3>1B</h3>
              <p>Clicked & Scanned connections</p>
            </div>
            <div className="stat">
              <h3>300k</h3>
              <p>App Integrations</p>
            </div>
          </div>
        </div>
      </Container>
    </StyledStatistics>
  );
};
