import _listsService from "../Services/ListService.js";
import _store from "../store.js";
//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = document.getElementById('lists')
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  createList(e) {
    e.preventDefault()
    console.log(e)

  }
}

_listsService
_store
