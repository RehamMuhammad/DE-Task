import * as React from 'react';
import './todo-form.scss';

export const TodoForm = ({todos, setTodos}) => {
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    setTodos([...todos,{
     id: todos.length,
     label: task,
     checked: false
   }])
   setTask("")
  };
  console.log(todos)


  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
