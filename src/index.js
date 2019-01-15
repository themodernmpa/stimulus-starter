import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import Turbolinks from 'turbolinks'
import { debugEvents } from './turbolinks_events'

Turbolinks.start()

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

debugEvents()

// Fires new `teardown` lifecycle method before Turbolinks caches the page DOM
document.addEventListener("turbolinks:before-cache", function () {
  application.controllers.forEach(function (controller) {
    if (typeof controller.teardown === "function") {
      controller.teardown()
    } else {
      debugger
      console.warn(`Controller '${controller.identifier}' does not implement teardown()`)
    }
  })
})
