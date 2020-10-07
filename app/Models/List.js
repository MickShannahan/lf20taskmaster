import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name
    this.tasks = data.tasks || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you


  get Template() {
    let subtemplate = ''

    subtemplate + `
    <div id="${this.id}" class="col-4">
          <div class="p-2">
            <div class="row p-1 m-3 bg-fade-primary text-light shadow-sm align-items-center">
              <div class="col px-0 pl-1 p-1">
                <h5 class="mb-0">${this.name}</h5>
              </div>
              <button class="col-2 btn-list" data-toggle="collapse" data-target="#createTaskForm">+</button>
              <button class="col-2 btn-list">x</button>
              <div id="createTaskForm" data-toggle="collapse" class="col-12 collapse">
                <div class="row form-group align-content-center" onsubmit="createTask(event, ${this.id})">
                  <input type="text" class="form-control col rounded-0 bg-light-grey" name="" id=""
                    aria-describedby="helpId" placeholder="enter task name..">
                  <button class="col-2 bg-dark btn-list d-flex align-items-center text-center" data-toggle="collapse"
                    data-target="#createTaskForm">+</button>
                </div>
              </div>
              <div class="col-12 bg-light-grey ">
                <div class="row text-dark">`

    this.tasks.array.forEach((task, index) => {
      subtemplate += `
                  <div class="col-12 pl-2 border-bottom">
                  <div class="row p-2 align-items-center">
                  <div class="col">${task}</div>
                  <button class="btn-task d-flex align-content-center p-1 px-2 text-center"
                  onclick="app.deleteTask(${index})">x</button>
                  </div>
                  </div>
                  `});

    subtemplate += `
                </div >
              </div >
            </div >
          </div >
        </div > `
    return subtemplate
  }

}
