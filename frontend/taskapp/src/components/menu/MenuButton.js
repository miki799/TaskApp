import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { IoStatsChartSharp, IoSettings } from "react-icons/io5";
import { GoTasklist } from "react-icons/go";
import {
  BsFillChatRightTextFill,
  BsFillCalendarWeekFill,
} from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { menu } from "../../utils/Data";

const MenuButton = ({ buttonType, selectedMenu, setSelectedMenu }) => (
  <Container
    onClick={() => setSelectedMenu(buttonType)}
    buttonType={buttonType}
    selectedMenu={selectedMenu}
  >
    <IconContext.Provider value={{ size: "1.5em" }}>
      {buttonType === menu.home && (
        <>
          <AiFillHome />
          <Text>Home</Text>
        </>
      )}
      {buttonType === menu.stats && (
        <>
          <IoStatsChartSharp />
          <Text>Stats</Text>
        </>
      )}
      {buttonType === menu.tasks && (
        <>
          <GoTasklist />
          <Text>Tasks</Text>
        </>
      )}
      {buttonType === menu.chat && (
        <>
          <BsFillChatRightTextFill />
          <Text>Chat</Text>
        </>
      )}
      {buttonType === menu.calendar && (
        <>
          <BsFillCalendarWeekFill />
          <Text>Calendar</Text>
        </>
      )}
      {buttonType === menu.settings && (
        <>
          <IoSettings />
          <Text>Settings</Text>
        </>
      )}
      {buttonType === menu.logout && (
        <>
          <RiLogoutBoxRFill />
          <Text>Log out</Text>
        </>
      )}
    </IconContext.Provider>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  height: 50px;
  color: ${({ theme }) => theme.color.grey};
  transition: all 0.3s ease;
  transition-delay: all 0.3s ease;
  -webkit-transition-delay: all 0.3s ease;
  -moz-transition-delay: all 0.3s ease;
  -ms-transition-delay: all 0.3s ease;
  -o-transition-delay: all 0.3s ease;
  &&:hover {
    border-right: 5px solid ${({ theme }) => theme.color.lapis};
    color: #000;
  }
  color: ${({ selectedMenu, buttonType, theme }) =>
    selectedMenu === buttonType ? "#000" : theme.color.grey};
  border-right: ${({ selectedMenu, buttonType, theme }) =>
    selectedMenu === buttonType ? "5px solid" + theme.color.lapis : ""};
`;

const Text = styled.h3`
  font-size: 20px;
  margin-left: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export default MenuButton;
