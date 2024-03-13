// react is synchronous or asynchronous

// React sets its state asynchronously because doing otherwise can result in an expensive operation.
// Making it synchronous might leave the browser unresponsive.
// Asynchronous setState calls are batched to provide a better user experience and performance.