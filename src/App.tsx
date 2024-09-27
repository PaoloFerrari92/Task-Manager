import React from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import Filter from './components/Filter';

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Task Manager</h1>
          <div className="card">
            <div className="card-body">
              <AddTaskForm />
              <Filter />
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
