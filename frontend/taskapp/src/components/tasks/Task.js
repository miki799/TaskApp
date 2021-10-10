import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

// isDragging - event when draggable is dragged

const Task = ({ task, index, isDragDisabled }) => {
  return (
    <Draggable draggableId={task.id} index={index} isDragDisabled={isDragDisabled}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
        >
          <Name>{task.name}</Name>
          <Description>{task.description}</Description>
          <Date>{task.start}</Date>
          <Date>{task.end}</Date>
        </Container>
      )}
    </Draggable>
  );
};

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${({isDragging, isDragDisabled}) => isDragDisabled ? "lightgrey" : isDragging ? "lightgreen" : "white"};
`;

const Name = styled.h3``;

const Description = styled.p``;

const Date = styled.p``;

Task.propTypes = {
  task: propTypes.object,
  index: propTypes.number,
};

export default Task;
