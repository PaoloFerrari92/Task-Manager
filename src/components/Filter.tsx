import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/taskSlice'; // Importa l'azione per impostare il filtro
import { RootState } from '../redux/store';

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.tasks.filter); // Seleziona il filtro attuale

  const handleFilterChange = (newFilter: 'all' | 'completed' | 'incomplete') => {
    dispatch(setFilter(newFilter)); // Cambia il filtro al click dell'utente
  };

  return (
    <div className="btn-group mb-3">
      <button
        className={`btn btn-${filter === 'all' ? 'primary' : 'outline-primary'}`}
        onClick={() => handleFilterChange('all')}
      >
        Tutti
      </button>
      <button
        className={`btn btn-${filter === 'completed' ? 'primary' : 'outline-primary'}`}
        onClick={() => handleFilterChange('completed')}
      >
        Completati
      </button>
      <button
        className={`btn btn-${filter === 'incomplete' ? 'primary' : 'outline-primary'}`}
        onClick={() => handleFilterChange('incomplete')}
      >
        Incompleti
      </button>
    </div>
  );
};

export default Filter;
