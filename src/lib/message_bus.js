export const events = {
  TODO_CREATED: "TODO_CREATED"
}

const subscribe = (eventName, callback) => {
  if (!events[eventName]) {
    throw `Cannot subscribe to undefined event ${eventName}`
  }
  if (!callback) {
    throw `Cannot subscribe to ${eventName} with an undefined callback`
  }

  document.body.addEventListener(eventName, callback)
  return () => document.body.removeEventListener(eventName, callback)
}

const publish = (eventName, data = {}) => {
  if (!events[eventName]) {
    throw `Cannot publish to undefined event ${eventName}`
  }

  data.sent_at = new Date().toISOString()

  const event = new CustomEvent(eventName, {
    detail: Object.assign({}, data),
  })
  document.body.dispatchEvent(event)
}

export const bus = {
  publish: publish,
  subscribe: subscribe
};
