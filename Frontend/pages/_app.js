import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";

import { FundraiserProvider } from "../context/FundraiserContext";
import { Footer, Navbar } from "../components";
import "../styles/globals.css";

const Marketplace = ({ Component, pageProps }) => (
  <FundraiserProvider>
    <ChakraProvider>
      <ThemeProvider attribute="class">
        <div className="dark:bg-nft-dark bg-white min-h-screen">
          <Navbar />
          <div className="pt-65">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>

        <Script
          src="https://kit.fontawesome.com/d45b25ceeb.js"
          crossorigin="anonymous"
        />
      </ThemeProvider>
    </ChakraProvider>
  </FundraiserProvider>
);

export default Marketplace;
