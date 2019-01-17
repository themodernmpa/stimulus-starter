import { ApplicationController, events } from "./application_controller"

export default class extends ApplicationController {

  connect() {
  }

  create() {
    const todoContents = this.element.querySelector('textarea').value
    this.publish(events.TODO_CREATED, { class: '', description: todoContents, created: Date.now() })
  }
}
