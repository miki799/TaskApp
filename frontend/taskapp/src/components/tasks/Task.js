import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
//import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

// isDragging - event when draggable is dragged

const Task = ({ task, index, isDragDisabled }) => {
  return (
    <Draggable
      draggableId={task.id}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
          onClick={() => console.log("Task opened!")}
        >
          <InnerContainer>
            <h3>{task.name}</h3>
            <AiFillEdit onClick={() => console.log("task with id: " + task.id + " edited!")}/>
          </InnerContainer>
          <Description>{task.description}</Description>
          <Date>Dodano {task.start}</Date>
        </Container>
      )}
    </Draggable>
  );
};

const Container = styled.div`
  border-radius: 15px;
  padding: 10px 15px;
  margin: 0px 20px 15px 0px;
  background-color: ${({ isDragging, isDragDisabled, theme }) =>
    isDragDisabled
      ? theme.color.mediumBlueBackground
      : isDragging
      ? theme.color.mediumBlueBackground
      : "#fff"};
  color: ${({ isDragging, isDragDisabled }) =>
    isDragging || isDragDisabled ? "#fff" : "#000"};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 5px;
  h3 {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-right: 10px;
  }
  svg {
    font-size: 20px;
    cursor: pointer;
    margin-right: 0;
    margin-left: auto;
    &:hover{
      color: ${({theme}) => theme.color.grey};
    }
  }
`;

const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const Date = styled.p`
  font-size: 12px;
  margin: 10px 0px 0px 0px;
  display: inline-block;
`;

Task.propTypes = {
  task: propTypes.object,
  index: propTypes.number,
};

export default Task;
