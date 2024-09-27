// redux/localStorage.ts

// Funzione per caricare lo stato dal localStorage
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('tasks'); // Assicurati che il nome sia 'tasks' per corrispondere a quello che hai nello store
      if (serializedState === null) {
        return undefined; // Se non esiste, ritorna undefined (così verrà usato l'initialState di Redux)
      }
      return JSON.parse(serializedState); // Parso lo stato salvato
    } catch (err) {
      console.error("Errore nel caricamento dello stato dal localStorage", err);
      return undefined;
    }
  };
  
  // Funzione per salvare lo stato nel localStorage
  export const saveState = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('tasks', serializedState); // Salva lo stato nella chiave 'tasks'
    } catch (err) {
      console.error("Errore nel salvataggio dello stato nel localStorage", err);
    }
  };
  