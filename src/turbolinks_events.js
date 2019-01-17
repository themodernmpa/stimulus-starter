// connect the Turbolinks lifecycle events to your application
export const wireTurboLinksEvents = () => {
  document.addEventListener('turbolinks:load', function () {
    console.log('turbolinks:load')
  })
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
}
