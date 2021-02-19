import _listService from "../Services/ListService.js";
import { _store } from "../store.js";
//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listArea = document.getElementById('lists')
  let template = ''
  console.log("drawing lists")
  _store.State.lists.forEach(list => template += list.Template)
  listArea.innerHTML = template
}

function _drawLibrary() {
  let dropDown = document.getElementById("drop-down")
  let lists = _store.State.lists
  let template = ''
  lists.forEach(list => template += `<a class="dropdown-item" href="#list-${list.id}">${list.name}</a>`)
  dropDown.innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    console.log("controller loaded")
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
    _drawLibrary()
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  createList(e) {
    e.preventDefault()
    let newList = {
      name: e.target.listName.value
    }
    _listService.createList(newList)
    e.target.reset()

    _drawLists()
    _drawLibrary()
  }
  deleteList(listId) {
    let prompt = window.confirm("are you sure you want to delete?")
    if (prompt) {
      _listService.deleteList(listId)
      _drawLists()
      _drawLibrary()
    }
  }

  addTask(e, listId) {
    e.preventDefault()
    let taskData = e.target.newTask.value
    _listService.addTask(taskData, listId)
    e.target.reset()
    _drawLists()
    _drawLibrary()
  }

  deleteTask(taskIndex, listId) {
    let prompt = window.confirm("are you sure you want to delete this task")
    if (prompt) {
      _listService.deleteTask(taskIndex, listId)
      _drawLists()
      _drawLibrary()
    }
  }
}

_listService
_store
