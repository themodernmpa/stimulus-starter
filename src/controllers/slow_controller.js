import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["loadCount"]

    initialize() {
        console.log('initialize')
        this.counter = 1
    }
    connect() {
        console.log('connect')
        this.loadCountTarget.innerText = this.counter++
    }
}
