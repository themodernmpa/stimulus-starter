import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import Turbolinks from 'turbolinks'
import { wireTurboLinksEvents } from './turbolinks_events'

Turbolinks.start()

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

wireTurboLinksEvents()
