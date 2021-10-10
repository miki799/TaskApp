import React from "react";
import styled from "styled-components";
import Icon from ".//MenuButton";
import { menu } from "../../utils/Data";

const Menu = ({selectedMenu, setSelectedMenu}) => {

  return (
    <Sidebar>
      <AppName>TaskApp</AppName>
      <Icon
        buttonType={menu.home}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <Icon
        buttonType={menu.tasks}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <Icon
        buttonType={menu.stats}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <Icon
        buttonType={menu.chat}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <Icon
        buttonType={menu.calendar}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <MenuInnerContainer>
        <Icon
          buttonType={menu.settings}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
        <Icon
          buttonType={menu.logout}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      </MenuInnerContainer>
    </Sidebar>
  );
};

const Sidebar = styled.div`
  background-color: ${({theme}) => theme.color.darkBackground};;
  top: 0;
  left: 0;
  height: 100vh; 
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px 0px 0px 50px;
  position: fixed;
  border-right: solid 1px ${({theme}) => theme.color.grey};
`;

const MenuInnerContainer = styled.div`
  margin: auto 0 55px 0;
`;

const AppName = styled.h3`
  margin: 0px 0px 40px 0px;
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.lapis};
`;

export default Menu;
