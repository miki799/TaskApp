import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./assets/GlobalTheme";
import { menu } from "./utils/Data";
import Menu from "./components/menu/Menu";
import TaskSection from "./components/tasks/TaskSection";

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(menu.tasks);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
        <Container>
          {selectedMenu === menu.tasks ? <TaskSection /> : <img src="https://picsum.photos/1000" alt="random pic"/>}

        </Container>
      </>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: calc(100% - 390px);
  margin-left: 350px;
  padding: 50px 0px 25px 40px;
`;

export default App;
