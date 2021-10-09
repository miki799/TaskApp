export const initialData = {
    tasks: {
      'task-1': { id: 'task-1', name: 'Take out the garbage', description: "Opis", start: "1234", end: "4321"},
      'task-2': { id: 'task-2', name: 'Watch my favorite show', description: "Opis", start: "1234", end: "4321" },
      'task-3': { id: 'task-3', name: 'Charge my phone', description: "Opis", start: "1234", end: "4321" },
      'task-4': { id: 'task-4', name: 'Cook dinner', description: "Opis", start: "1234", end: "4321" },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1'],
  };
