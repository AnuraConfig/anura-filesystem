export default class NoSuchOptionError extends Error {
  constructor(message) {
    super(message)
    this.name = "NoSuchOptionError"
  }
}
