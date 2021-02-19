import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: []
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  createList(newList) {
    _state.lists.push(newList)
    console.log("list added", newList)
    this.saveState()
  }

  deleteList(listIndex) {
    _state.lists.splice(listIndex, 1)
    console.log("list removed", listIndex)
    this.saveState()
  }

  addTask(task, listIndex) {
    console.log(task, listIndex)
    _state.lists[listIndex].tasks.push(task)
    console.log("task Added", task)
    this.saveState()
  }

  deleteTask(taskIndex, listIndex) {
    console.log(taskIndex, listIndex)
    _state.lists[listIndex].tasks.splice(taskIndex, 1)
    console.log("task Removed", taskIndex)
    this.saveState()
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const _store = new Store();
export { _store };

