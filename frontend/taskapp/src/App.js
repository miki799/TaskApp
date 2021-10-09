import React, { useState } from "react";
import { initialData } from "./assets/initialData";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./components/Column";

const App = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
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

    const column = data.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1); // cutting off from the source position
    newTaskIds.splice(destination.index, 0, draggableId); // adding to selected position

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    setData({
      ...data,
      columns: { ...data.columns, [newColumn.id]: newColumn },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
  );
};

export default App;
