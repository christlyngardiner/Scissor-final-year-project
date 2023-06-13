import { ColoredText } from "@styles/components/ColoredText.styled";
import { Container } from "@styles/components/Container.styled";
import { SectionHeading } from "@styles/components/SectionHeading.styled";
import { SectionText } from "@styles/components/SectionText.styled";

import { ReactComponent as Icon1 } from "@assets/icon-1.svg";
import { ReactComponent as Icon2 } from "@assets/icon-2.svg";
import { ReactComponent as Icon3 } from "@assets/icon-3.svg";
import { ReactComponent as Icon4 } from "@assets/icon-4.svg";

import { StyledWhyScissors } from "./WhyScissors.styled";


export const WhyScissors = () => {
  return (
    <StyledWhyScissors>
      <Container>
        <div className="content">
          <div className="left-section">
            <SectionHeading>
              Why choose <ColoredText>Scissors</ColoredText>
            </SectionHeading>
            <SectionText className="summary">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.
            </SectionText>
          </div>
          <div className="right-section">
            <div className="feature">
              <Icon1 />
              <h3>URL Shortening</h3>
              <p>
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
            <div className="feature">
              <Icon2 />
              <h3>Custom URLs</h3>
              <p>
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
            <div className="feature">
              <Icon3 />
              <h3>QR Codes</h3>
              <p>
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
            <div className="feature">
              <Icon4 />
              <h3>Data Analytics</h3>
              <p>
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </StyledWhyScissors>
  );
};
