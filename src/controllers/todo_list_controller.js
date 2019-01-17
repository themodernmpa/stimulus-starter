import { ApplicationController, events } from "./application_controller"

export default class extends ApplicationController {
  template = (row) => {
    return `<tr class="${row.class}">
      <td></td>
      <td>${row.description}</td>
      <td>${row.created}</td>
    </tr>`
  }

  connect() {
    // Subscribe to events creating new TODOs
    this.subscribe(events.TODO_CREATED, (todo) => {
      this.addItem(todo.detail)
      this.saveItem(todo.detail)
    })
    // TODO implement localstorage retrieval & populate addItem
  }

  addItem(item) {
    // TODO add odd/even classes
    const tr = document.createElement('tr')
    tr.innerHTML = this.template(item)
    this.element.querySelector('tbody').appendChild(tr)
  }

  saveItem(item) {
    // TODO implement localstorage addition
  }
}
