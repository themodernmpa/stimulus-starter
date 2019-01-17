class Counter {
  count = 0

  constructor() {

  }

  increment() {
    return ++this.count
  }

  get count() {
    return this.count
  }
}

export default new Counter()
