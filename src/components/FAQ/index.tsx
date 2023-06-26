import { Container } from "@styles/components/Container.styled";
import { SectionHeading } from "@styles/components/SectionHeading.styled";

import DecorImageLeft from "@assets/faq-decor-left.png";
import DecorImageRight from "@assets/faq-decor-right.png";
import { ReactComponent as MinusIcon } from "@assets/minus.svg";
import { ReactComponent as PlusIcon } from "@assets/plus.svg";

import { StyledFAQ } from "./FAQ.styled";


export const FAQ = () => {
  return (
    <StyledFAQ>
      <img src={DecorImageLeft} alt="" className="decor decor-1" />
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
              <h3>Are the shortened links permanent? Will they expire?</h3>
              <PlusIcon />
            </div>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>
                Can i customize the shortened URLs to reflect my brand or
                content?
              </h3>
              <PlusIcon />
            </div>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>
                Is it necessary to create an account to use the URL shortening
                service?
              </h3>
              <PlusIcon />
            </div>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>
                Are there any limitations on the number of URLs i could shorten?
              </h3>
              <PlusIcon />
            </div>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>Can i track the performance of my URL?</h3>
              <PlusIcon />
            </div>
          </li>
          <li className="faqs-item">
            <div className="header">
              <h3>What is a QR code and what can it do? </h3>
              <PlusIcon />
            </div>
          </li>
        </ul>
      </Container>
      <img src={DecorImageRight} alt="" className="decor decor-2" />
    </StyledFAQ>
  );
};
