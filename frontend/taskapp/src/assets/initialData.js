export const initialData = {
    tasks: {
      'task-1': { id: 'task-1', name: 'Take out the garbage', description: "Opis", start: "1234", end: "4321"},
      'task-2': { id: 'task-2', name: 'Watch my favorite show', description: "Opis", start: "1234", end: "4321" },
      'task-3': { id: 'task-3', name: 'Charge my phone', description: "Opis", start: "1234", end: "4321" },
      'task-4': { id: 'task-4', name: 'Cook dinner', description: "Opis", start: "1234", end: "4321" },
      'task-5': { id: 'task-5', name: 'Shit', description: "Opis", start: "1234", end: "4321"},
      'task-6': { id: 'task-6', name: 'Eat', description: "Opis", start: "1234", end: "4321" },
      'task-7': { id: 'task-7', name: 'Dring', description: "Opis", start: "1234", end: "4321" },
      'task-8': { id: 'task-8', name: 'Play', description: "Opis", start: "1234", end: "4321" },
      'task-9': { id: 'task-9', name: 'Read', description: "Opis", start: "1234", end: "4321"},
      'task-10': { id: 'task-10', name: 'Run', description: "Opis", start: "1234", end: "4321" },
      'task-11': { id: 'task-11', name: 'Fly', description: "Opis", start: "1234", end: "4321" },
      'task-12': { id: 'task-12', name: 'Lazy time', description: "Opis", start: "1234", end: "4321" },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'ToDo',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-2': {
        id: 'column-2',
        title: 'inProgress',
        taskIds: ['task-5', 'task-6', 'task-7', 'task-8'],
      },
      'column-3': {
        id: 'column-3',
        title: 'finished',
        taskIds: ['task-9', 'task-10', 'task-11', 'task-12'],
      }
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
  };
