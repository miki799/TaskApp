import React, { useEffect } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { ImPlus } from "react-icons/im";

// isDraggingOver - event when draggable is dragged over droppable
// type={column.id ...} - dragging only between toDo and inProgress column

const Column = ({ tasks, column }) => {
  useEffect(() => {
    console.log("Current tasks from " + column.title);
    tasks.map((item) => console.log(item));
  }, [tasks]);

  return (
    <Container columnId={column.id}>
      <InnerContainer>
        <Title>{column.title}</Title>
        <Count>
          <h3>{column.taskIds.length}</h3>
        </Count>
      </InnerContainer>
      {column.id === "column-1" && (
        <AddTask>
          <ImPlus />
        </AddTask>
      )}
      <Droppable
        droppableId={column.id}
        /* type={column.id === "column-3" ? "done" : "active"} */
      >
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.draggingOverWith}
          >
            {tasks.length !== 0 ? (
              tasks.map((item, index) => (
                <Task
                  key={item.id}
                  task={item}
                  index={index}
                  isDragDisabled={column.title === "Finished" ? true : false}
                />
              ))
            ) : column.id !== "column-1" ? (
              <NoTasks>
                {(column.id === "column-2" && "No tasks in progress...") ||
                  (column.id === "column-3" && "No task has been finished")}
              </NoTasks>
            ) : null}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 25px;
  margin-right: 25px;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lightBlueBackground};
  padding: 30px 30px 10px 30px;
  padding: ${({ columnId }) =>
    columnId === "column-1" ? "30px 30px 5px 30px" : "30px 30px 27px 30px"};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 20px 0px;
  align-items: center;
`;

const Count = styled.div`
  color: #fff;
  background-color: ${({ theme }) => theme.color.mediumBlueBackground};
  margin: 0px 0px 0px auto;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  h3 {
    margin: 4px 0px 0px 0px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin: 0px;
`;

const AddTask = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.mediumBlueBackground};
  border-radius: 10px;
  margin-bottom: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: #fff;
  font-size: 30px;
  text-align: center;
  padding-top: 8px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.8;
  }
`;

const NoTasks = styled.div`
  width: 70%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.mediumBlueBackground};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: #fff;
  font-size: 16px;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
  margin: 15px auto 0 auto;
`;

const TaskList = styled.div`
  background-color: ${({ theme }) => theme.color.lightBlueBackground};
  max-height: 675px;
  min-height: 5px;
  overflow-y: scroll;
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.lightBlueBackground};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.mediumBlueBackground};
    border-radius: 5px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.mediumBlueBackground};
    border-radius: 5px;
  }
`;

Column.propTypes = {
  tasks: propTypes.array,
  column: propTypes.object,
};

export default Column;
