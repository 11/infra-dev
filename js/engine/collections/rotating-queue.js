export default class RotatingQueue {
  get size() {
    return this.queue.length
  }

  constructor(len = 10) {
    this.len = len
    this.queue = []
  }

  push(item) {
    if (this.queue.length >= this.len) {
      this.queue.shift()
    }

    this.queue.push(item)
  }

  get(index) {
    return this.queue[index]
  }
}
