import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const AddTaskForm: React.FC = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask({
        id: Date.now().toString(),
        description,
        completed: false
      }));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Aggiungi nuova attività"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Aggiungi
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTaskForm;
