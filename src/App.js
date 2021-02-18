import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { Crm, Guns } from "./pages";
import { Header, Footer } from "./components";

const AppWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  @media ${({ theme }) => theme.media.mediumDevices} {
    padding: 156px 0 0 0;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <main>
        <Route exact path="/" component={Guns} />
        <Route exact path="/crm" component={Crm} />
      </main>
      <Footer />
    </AppWrapper>
  );
}

export default App;
