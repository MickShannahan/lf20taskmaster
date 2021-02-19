import List from "../Models/List.js";
import { _store } from "../store.js";
//Public
class ListService {
  constructor() {
    console.log("service loaded")
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  createList(listName) {
    let newList = new List(listName)
    _store.createList(newList)
  }

  deleteList(listId) {
    let indexToRemove = _store.State.lists.findIndex(list => list.id == listId)
    _store.deleteList(indexToRemove)
  }

  addTask(task, listId) {
    let listToAdd = _store.State.lists.findIndex(list => list.id == listId)
    if (listToAdd >= 0) {
      _store.addTask(task, listToAdd)
    } else {
      console.error("that list id does not exist")
    }
  }

  deleteTask(taskIndex, listId) {
    let list = _store.State.lists.findIndex(list => list.id == listId)
    if (list >= 0) {
      _store.deleteTask(taskIndex, list)
    } else {
      console.error("that list or task does not exist")
    }
  }


}

const SERVICE = new ListService();
export default SERVICE;
