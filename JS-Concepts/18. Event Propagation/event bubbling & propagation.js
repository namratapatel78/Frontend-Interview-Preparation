// https://javascript.info/bubbling-and-capturing

// Event bubbling - When an event happens on an element,
// it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// The most deeply nested element that caused the event is called a target element,
// accessible as event.target.