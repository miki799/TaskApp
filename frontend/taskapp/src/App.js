import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./assets/GlobalTheme";
import Icon from "./components/MenuButton";

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Menu>
          <AppName>TaskApp</AppName>
          <Icon
            buttonType="home"
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          <Icon
            buttonType="stats"
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          <Icon
            buttonType="tasks"
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          <Icon
            buttonType="chat"
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          <Icon
            buttonType="calendar"
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          <MenuInnerContainer>
            <Icon
              buttonType="settings"
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
            />
            <Icon
              buttonType="logout"
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
            />
          </MenuInnerContainer>
        </Menu>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div``;

const Menu = styled.div`
  background-color: white;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px 0px 0px 50px;
  position: fixed;
  border-right: solid 1px lightgrey;
`;

const MenuInnerContainer = styled.div`
  margin: auto 0 55px 0;
`;

const AppName = styled.h3`
  margin: 0px 0px 50px 0px;
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default App;
