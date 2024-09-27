import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  // Crea una copia dell'array e ordina la copia
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1; // Sposta 'a' dopo 'b'
    }
    if (!a.completed && b.completed) {
      return -1; // Sposta 'a' prima di 'b'
    }
    return 0; // Mantiene l'ordine attuale se entrambi sono nello stesso stato
  });

  return (
    <div>
      <h2 className="text-center mb-4">Le tue attività</h2>
      {tasks.length === 0 ? (
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
