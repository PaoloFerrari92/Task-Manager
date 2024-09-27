import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filter = useSelector((state: RootState) => state.tasks.filter);

  // Filtra le attività in base al filtro selezionato
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true; // Se il filtro è 'all', restituisci tutte le attività
  });

  // Ordina le attività per mettere le completate in fondo
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    return Number(a.completed) - Number(b.completed);
  });

  return (
    <div>
      <h2 className="text-center mb-4">Le tue attività</h2>
      {sortedTasks.length === 0 ? (
        <p className="text-center">Non ci sono attività.</p>
      ) : (
        <ul className="list-group">
          {sortedTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
