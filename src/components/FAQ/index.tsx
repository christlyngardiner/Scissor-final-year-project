import { Container } from "@styles/components/Container.styled";
import { SectionHeading } from "@styles/components/SectionHeading.styled";

import { ReactComponent as MinusIcon } from "@assets/minus.svg";
import { ReactComponent as PlusIcon } from "@assets/plus.svg";

import { StyledFAQ } from "./FAQ.styled";


export const FAQ = () => {
  return (
    <StyledFAQ>
      <Container>
        <SectionHeading>FAQs</SectionHeading>

        <ul className="faqs">
          <li className="faqs-item">
            <div className="header">
              <h3>How does URL shortening work?</h3>
              <MinusIcon />
            </div>
            <p className="body">
              URL shortening works by taking a long URL and creating a shorter,
              condensed version that redirects to the original URL. When a user
              clicks on the shortened link, they are redirected to the intended
              destination.
            </p>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>How does URL shortening work?</h3>
              <PlusIcon />
            </div>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>How does URL shortening work?</h3>
              <PlusIcon />
            </div>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>How does URL shortening work?</h3>
              <PlusIcon />
            </div>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>How does URL shortening work?</h3>
              <PlusIcon />
            </div>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>How does URL shortening work?</h3>
              <PlusIcon />
            </div>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>How does URL shortening work?</h3>
              <PlusIcon />
            </div>
          </li>
        </ul>
      </Container>
    </StyledFAQ>
  );
};
