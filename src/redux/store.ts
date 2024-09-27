import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice'; // Assicurati che il path sia corretto
import { loadState, saveState } from './localStorage'; // Assicurati di avere il path corretto per localStorage

// Carica lo stato salvato dal localStorage (deve essere coerente con lo stato gestito da Redux)
const preloadedState = {
  tasks: loadState(), // Assicurati che 'tasks' sia coerente con il nome del tuo reducer
};

export const store = configureStore({
  reducer: {
    tasks: taskReducer, // Deve corrispondere alla chiave del reducer
  },
  preloadedState, // Imposta lo stato precaricato
});

// Salva lo stato nel localStorage ogni volta che cambia
store.subscribe(() => {
  saveState(store.getState().tasks); // Assicurati che venga salvata solo la porzione di stato corretta
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
