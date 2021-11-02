import './CreateTask.css';

const CreateTask = (props) => {
  // console.log(document.querySelector('input'));
  // const value = document.querySelector('input').value;

  return (
    <div className="CreateTask">
      <div className="h1">
        <h1>Новая задача</h1>
      </div>
      <div className="input">
        <div></div>
        <input></input>
        <button onClick={() => props.onClick()}>+ Добавить</button>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default CreateTask;
