import './TaskHeader.css';

const TaskHeader = (props) => {
  let text;
  switch (props.mod) {
    case 'backlog':
      text = 'Беклог';
      break;
    case 'inProgress':
      text = 'В процессе';
      break;
    case 'completed':
      text = 'Готово';
      break;
    case 'basket':
      text = 'Корзина';
      break;

    default:
      break;
  }
  return (
    <div
      className={
        props.className +
        '__TaskHeader ' +
        props.className +
        '__TaskHeader_' +
        props.mod
      }
    >
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TaskHeader;
