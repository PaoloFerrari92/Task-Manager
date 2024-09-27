import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  filter: 'all' | 'completed' | 'incomplete';
}

const initialState: TaskState = {
  tasks: [],
  filter: 'all',
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action: PayloadAction<'all' | 'completed' | 'incomplete'>) => {
      state.filter = action.payload;
    },
    // Nuova azione per modificare la descrizione di un'attività
    editTask: (state, action: PayloadAction<{ id: string; description: string }>) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.description = action.payload.description;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask, setFilter, editTask } = taskSlice.actions;
export default taskSlice.reducer;
