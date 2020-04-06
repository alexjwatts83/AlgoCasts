// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.data = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.data[eventName] === undefined) {
      this.data[eventName] = [];
    }
    this.data[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    let callbacks = this.data[eventName];
    for(let i = 0; i < callbacks.length; i++) {
      callbacks[i]();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.data[eventName] === undefined) {
      return;
    }
    this.data[eventName] = [];
  }
}

module.exports = Events;
