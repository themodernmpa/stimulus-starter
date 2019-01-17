import { Controller } from "stimulus"

export default class extends Controller {
  template = (row) => {
    return `<tr class="${row.class}">
      <td></td>
      <td>${row.description}</td>
      <td>${row.created}</td>
    </tr>`
  }

  connect() {
    console.log('todo list controller')

    const tr = document.createElement('tr')
    tr.innerHTML = this.template({ class: '', description: 'Test', created: 'here' })
    this.element.querySelector('tbody').appendChild(tr)
  }
}
