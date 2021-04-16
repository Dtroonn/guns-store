import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Crm, Products, Favorites, Cart } from "./pages";
import { Header, Footer, MainPreloader } from "./components";

import { initialize } from "./redux/actions/initialize";

function App() {
  const dispatch = useDispatch();

  const isLoaded = useSelector(({ initialize }) => initialize.isLoaded);

  React.useEffect(() => {
    dispatch(initialize());
  }, []);

  if (!isLoaded) {
    return <MainPreloader />;
  }

  return (
    <AppWrapper>
      <Header />
      <main>
        <Route exact path="/products/:category" component={Products} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/crm" component={Crm} />
      </main>
      <Footer />
    </AppWrapper>
  );
}

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

export default App;
