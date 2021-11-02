import CreateTask from './CreateTask/CreateTask.jsx';
// import { Component } from 'react';
import './Content.css';
import TaskList from './TaskList/TaskList.jsx';
import content from '../../../store/content/content.js';
import { observer } from 'mobx-react';

const Content = () => {
  const tasks = content.tasks;
  return (
    <div
      className="Content"
      onDragStart={(e) => content.dragStartHandler(e)}
      onDragLeave={(e) => content.dragLeaveHandler(e)}
      onDragEnd={(e) => content.dragEndHandler(e)}
      onDragOver={(e) => content.dragOverHandler(e)}
      onDrop={(e) => content.dropHandler(e)}
      onClick={(e) => content.clickHandler(e)}
    >
      <CreateTask onClick={() => content.createTask()} />
      <TaskList className="backlog" tasks={tasks.backlog}></TaskList>
      <TaskList className="inProgress" tasks={tasks.inProgress}></TaskList>
      <TaskList className="completed" tasks={tasks.completed}></TaskList>
      <TaskList
        className="basket"
        tasks={tasks.basket}
        onClick={() => {
          content.deleteBasket();
        }}
      ></TaskList>
    </div>
  );
};

export default observer(Content);
