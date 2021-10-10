import React, { useEffect } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

// isDraggingOver - event when draggable is dragged over droppable
// type={column.id ...} - dragging only between toDo and inProgress column

const Column = ({ tasks, column }) => {
  useEffect(() => {
    console.log("Current tasks from " + column.title);
    tasks.map((item) => console.log(item));
  }, [tasks]);

  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id} type={column.id === "column-3" ? "done" : "active"}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.draggingOverWith}
          >
            {tasks.map((item, index) => (
              <Task key={item.id} task={item} index={index} isDragDisabled={column.title === "finished" ? true : false}/>
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  min-height: 100px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
  background-color: ${({isDraggingOver}) => isDraggingOver ? "skyblue" : "white"};
  flex-grow: 1;
`;

Column.propTypes = {
  tasks: propTypes.array,
  column: propTypes.object,
};

export default Column;
