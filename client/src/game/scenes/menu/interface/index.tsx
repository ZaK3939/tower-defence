import React, { useState } from "react";

import { Overlay } from "@game/scenes/system/interface/overlay";
import { WalletProvider } from "@scene/wallet-provider";
import { MenuPage } from "@type/menu";

import { Content } from "./content";
import { Copyright } from "./copyright";
import { Navigation } from "./navigation";
import { Wrapper, Logotype, Header, Block, Main, Menu, Title } from "./styles";

type Props = {
  defaultPage?: MenuPage;
};

export const MenuUI: React.FC<Props> = ({ defaultPage }) => {
  const [page, setPage] = useState(defaultPage ?? MenuPage.NEW_GAME);

  return (
    <Overlay>
      <Wrapper>
        <Header>
          <Block>
            <Logotype src="assets/logotype.png" />
            <Title>Crypto Defense</Title>
            <Copyright />
          </Block>
        </Header>
        <WalletProvider>
          <Menu>
            <Block centerContent>
              <Navigation page={page} onSelect={setPage} />
            </Block>
          </Menu>
          <Main>
            <Block>
              <Content page={page} />
            </Block>
          </Main>
        </WalletProvider>
      </Wrapper>
    </Overlay>
  );
};

MenuUI.displayName = "MenuUI";
