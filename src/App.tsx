import { Hero } from "@components/Hero";
import { Navbar } from "@components/Navbar";
import { Statistics } from "@components/Statistics";
import { TrimURL } from "@components/TrimURL";
import { WhyScissors } from "@components/WhyScissors";

import { GlobalStyles } from "@styles/GlobalStyles.styled";


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Statistics />
      <WhyScissors />
      <TrimURL />
    </>
  );
};
