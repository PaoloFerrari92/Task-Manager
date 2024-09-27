import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask, editTask, Task } from '../redux/taskSlice';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false); // Stato per la modalità modifica
  const [newDescription, setNewDescription] = useState(task.description); // Stato per la nuova descrizione

  // Funzione per salvare la modifica
  const handleSave = () => {
    if (newDescription.trim()) {
      dispatch(editTask({ id: task.id, description: newDescription }));
      setIsEditing(false); // Esci dalla modalità modifica
    }
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}>
      {isEditing ? (
        // Modalità modifica
        <>
          <input
            type="text"
            className="form-control me-2"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button className="btn btn-success me-2" onClick={handleSave}>
            Salva
          </button>
          <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
            Annulla
          </button>
        </>
      ) : (
        // Modalità visualizzazione
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <div>
            <button
              className={`btn btn-sm ${task.completed ? 'btn-warning' : 'btn-success'} me-2`}
              onClick={() => dispatch(toggleTask(task.id))}
            >
              {task.completed ? 'Annulla completamento' : 'Completa'}
            </button>
            {/* Mostra il pulsante di modifica solo se l'attività non è completata */}
            {!task.completed && (
              <button className="btn btn-sm btn-warning me-2" onClick={() => setIsEditing(true)}>
                Modifica
              </button>
            )}
            <button className="btn btn-sm btn-danger" onClick={() => dispatch(removeTask(task.id))}>
              Rimuovi
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
