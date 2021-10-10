import React, { useState } from "react";
import { initialData } from "../../assets/initialData";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const App = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId]; // source column
    const finish = data.columns[destination.droppableId]; // destination column

    // within column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds); // getting tasks from this column
      newTaskIds.splice(source.index, 1); // cutting off from the source position
      newTaskIds.splice(destination.index, 0, draggableId); // adding dragged task id to destination
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      setData({
        ...data,
        columns: { ...data.columns, [newColumn.id]: newColumn },
      });
    } else {
      // between columns
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1); // deleting task from source column
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };
      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId); // adding task to destination column
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };
      setData({
        ...data,
        columns: {
          ...data.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      });
    }
  };

  const onDragStart = () => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.2s ease";
  };

  const onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(data.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153,141,217, ${opacity}`;
  };

  return (
    <Container>
      <DragDropContext
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragUpdate={onDragUpdate}
      >
        {data.columnOrder.map((columnId) => (
          <Column
            key={data.columns[columnId].id}
            column={data.columns[columnId]}
            tasks={data.columns[columnId].taskIds.map(
              (taskId) => data.tasks[taskId]
            )}
          />
        ))}
      </DragDropContext>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default App;
