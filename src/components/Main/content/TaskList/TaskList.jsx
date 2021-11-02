import './TaskList.css';
import TaskHeader from './_TaskHeader/TaskHeader';
import Task from './__Task/Task.jsx';

const TaskList = (props) => {
  const className = props.className;

  const arr = props.tasks.map((e) => {
    return (
      <Task
        className="TaskList"
        mod={className}
        key={e.id}
        id={e.id}
        text={e.title}
      />
    );
  });

  let del = null;
  if (className === 'basket') {
    if (arr.length) {
      del = (
        <button className="deleteBtn" onClick={() => props.onClick()}>
          Очистить
        </button>
      );
    } else {
      del = (
        <button className="deleteBtn disabled" onClick={() => props.onClick()}>
          Очистить
        </button>
      );
    }
  }

  return (
    <div id={className} className={'TaskList TaskList_' + className}>
      <TaskHeader className="TaskList" mod={className} />
      {arr}
      {del}
    </div>
  );
};

export default TaskList;
