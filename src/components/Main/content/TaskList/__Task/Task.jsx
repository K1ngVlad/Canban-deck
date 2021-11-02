import './Task.css';

const Task = (props) => {
  if (!(props.editTasks === props.id))
    return (
      <div
        draggable={true}
        className={
          props.className + '__Task ' + props.className + '__Task_' + props.mod
        }
        id={props.id}
        text={props.text}
      >
        {props.text}
      </div>
    );
};

export default Task;
