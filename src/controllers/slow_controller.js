import { ApplicationController } from "./application_controller"
import counter from "../util/counter"

export default class extends ApplicationController {
  static targets = ["loadCount"]

  initialize() {
    // the counter is incremented when the controller is initialized which happens
    // when the turbolinks preview is shown but not when the preview is replaced with 
    // the DOM returned from the server
    counter.increment()
  }
  connect() {
    this.loadCountTarget.innerText = counter.count
  }
}
