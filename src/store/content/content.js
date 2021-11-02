import { makeAutoObservable } from 'mobx';

class Content {
  tasks = {
    backlog: [
      { id: '1', title: 'Пойти в магазин' },
      { id: '2', title: 'Выкинуть мусор' },
    ],
    inProgress: [
      { id: '3', title: 'Покормить кота' },
      { id: '4', title: 'Покормить слона' },
    ],
    completed: [
      { id: '5', title: 'Поспать' },
      { id: '6', title: 'Поесть' },
    ],
    basket: [
      { id: '7', title: 'Купить дом' },
      { id: '8', title: 'Купить мусор' },
    ],
  };

  // tasks2 = [
  //   {},
  //   {},
  //   {},
  //   {},
  // ]

  id = 8;
  currentTask = null;
  currentBoard = null;
  editTasks = false;

  constructor() {
    makeAutoObservable(this);
  }

  createTask() {
    let value = document.querySelector('input').value;
    if (!value) {
      return;
    }
    const update = JSON.parse(JSON.stringify(this.tasks.backlog));
    update.push({
      title: value,
      id: ++this.id,
    });
    this.tasks.backlog = update;
    value = '';
  }

  deleteBasket() {
    this.tasks.basket = [];
  }

  clickHandler(e) {
    if (!this.editTasks && !e.target.classList.toggle('edit')) {
      console.log(e.target.parentElement.getAttribute('id'));
      this.editTasks = e.target.parentElement.getAttribute('id');
    }
  }

  changeHadler(e) {
    console.log(e);
  }

  dragStartHandler(e) {
    if (!e.target.classList.contains('TaskList__Task')) {
      return;
    }
    const board = e.target.parentElement.getAttribute('id');
    const task = this.tasks[board].find(
      (i) => i.title === e.target.textContent
    );
    this.currentTask = task;
    this.currentBoard = board;
  }

  dragLeaveHandler(e) {
    const task = e.target;
    if (!task.classList.contains('TaskList__Task')) {
      return;
    }
    task.style.boxShadow = 'none';
    task.style.background = 'white';
  }

  dragEndHandler(e) {
    const task = e.target;
    if (!task.classList.contains('TaskList__Task')) {
      return;
    }
    task.style.boxShadow = 'none';
    task.style.background = 'white';
  }

  dragOverHandler(e) {
    e.preventDefault();
    const task = e.target;
    if (!task.classList.contains('TaskList__Task')) {
      return;
    }
    task.style.boxShadow = '0 2px 3px grey';
    task.style.background = 'lightGrey';
  }

  dropHandler(e) {
    e.preventDefault();
    if (
      !(
        e.target.classList.contains('TaskList__Task') ||
        e.target.classList.contains('TaskList') ||
        e.target.classList.contains('deleteBtn')
      )
    ) {
      return;
    }

    const update = JSON.parse(JSON.stringify(this.tasks));
    const tasks = this.tasks;

    const currentTask = this.currentTask;
    const currentBoard = this.currentBoard;
    const currentIndex = tasks[currentBoard].indexOf(currentTask);

    console.log(currentBoard);

    update[currentBoard].splice(currentIndex, 1);

    if (e.target.classList.contains('TaskList')) {
      const board = e.target.getAttribute('id');
      update[board].push(currentTask);
      this.tasks = update;
      //   tasks = tasks;
      return;
    }

    if (e.target.classList.contains('deleteBtn')) {
      const board = e.target.parentElement.getAttribute('id');
      update[board].push(currentTask);
      this.tasks = update;
      //   tasks = tasks;
      return;
    }

    const board = e.target.parentElement.getAttribute('id');
    const task = update[board].find((i) => i.title === e.target.textContent);
    const index = tasks[board].indexOf(task);

    update[board].splice(index, 0, currentTask);

    e.target.style.boxShadow = 'none';
    e.target.style.background = 'white';
    this.tasks = update;
    // tasks = tasks;
  }
}

export default new Content();
