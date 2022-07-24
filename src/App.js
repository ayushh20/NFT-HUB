import React from "react";
import Home from "./components/home";
import Choose from "./components/choose";
import MarketPlace from "./components/mktplc";
import Sub from "./components/subscribe";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrolltotop";

const App = () => {
  return (
    <div>
      <Home />
      <Choose />
      <MarketPlace />
      <Sub />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
