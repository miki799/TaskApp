import React, { useEffect } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ tasks, column }) => {
    useEffect(() => {
        
    }, [tasks])

    return (
    <Container>
      <Title>ToDo</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((item, index) => (
              <Task key={item.id} task={item} index={index} />
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
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

Column.propTypes = {
  tasks: propTypes.array,
  column: propTypes.object,
};

export default Column;
