// useEffect is a hook that lets you perform side effects in function components — like:
// Fetching data
// Subscribing to events
// Manually manipulating the DOM
// Setting timers, etc.


// 🧠 Key Rules for useEffect
// Runs after render, not during.

// Can have multiple useEffect hooks in a component.

// Runs again only if dependencies change.

// If no dependency array is provided, it runs after every render.

// Return function is used for cleanup.



// useEffect will be called after the component has finished execution.
// If we are setting state inside useEffect then the component will be executed again
// only if the dependencies have been changed.

// It is used to solve the side effects


// useEffect takes 2 arguments - function and dependencies.
// If we will not add any dependencies then useEffect will run only once
// when the component is executed first time.
// e.g.
useEffect(() => {
 console.log('called')
}, []);