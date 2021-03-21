import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { Crm, Products, Favorites, Cart } from "./pages";
import { Header, Footer } from "./components";

//import Footer from "./components/Footer/Footer.jsx";

const AppWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  @media ${({ theme }) => theme.media.mediumDevices} {
    padding: 156px 0 0 0;
  }
  @media ${({ theme }) => theme.media.smallDevices} {
    padding: 102px 0 0 0;
  }
  @media ${({ theme }) => theme.media.extraSmallDevices} {
    padding: 92px 0 0 0;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <main>
        <Route exact path="/" component={Products} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/crm" component={Crm} />
      </main>
      <Footer />
    </AppWrapper>
  );
}

export default App;
