import * as React from 'react';
import './todo-results.scss';

export const TodoResults = ({todos}) => {
  const [completedTasks, setCompletedTasks] = React.useState([])

  React.useEffect(() => {
      setCompletedTasks(todos.filter((todo) => todo.checked === true))
  }, [todos])
 

  return (
    <div className="todo-results">
      Done: 
      {completedTasks.length}
    </div>
  );
};
