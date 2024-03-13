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