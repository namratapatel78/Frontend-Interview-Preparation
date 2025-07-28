// 1. useCallback
// Purpose: Caches a function definition between re-renders.
// Usage: When you have a function that is defined inside a component and passed down to child components, useCallback ensures that the same instance of the function is used unless its dependencies change.

// const memoizedCallback = useCallback(() => {
//   // Your callback logic
// }, [dependency1, dependency2]);

// 2. useMemo
// Purpose: Caches the result of a calculation between re-renders.
// Usage: When you have an expensive calculation or a complex computation, useMemo ensures that the computation is only performed when its dependencies change.
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


// 3. useRef
// Purpose: Creates a mutable object that persists for the lifetime of the component.
// Usage: Commonly used to access a DOM element directly or to keep a mutable value that doesn’t trigger re-renders when updated.
// const myRef = useRef(initialValue);
// // Access the ref: myRef.current


// 4. useLayoutEffect
// Runs synchronously after all DOM mutations, but before the browser paints.

// Like useEffect, but:
// It blocks the paint until it runs.
// Runs after the DOM is updated but before the user sees changes.

// 🤔 When to use:
// Measuring layout (offsetHeight, getBoundingClientRect)
// Reading or writing to the DOM where timing is critical
// Avoiding visual glitches before DOM manipulation

// Common Use Cases:Measuring elements, triggering animations, syncing scroll positions


// React.memo
// Purpose: Higher-order component that memoizes the rendered output of a component.
// Usage: When you have a functional component that renders the same output given the same props, React.memo prevents unnecessary re-renders.
// const MyComponent = React.memo((props) => {
//   // Component logic
// });
// Example Usage
// Here’s a practical example combining these hooks and utilities:


import React, { useState, useCallback, useMemo, useRef } from 'react';

const ExpensiveComponent = React.memo(({ compute, value }) => {
  console.log('Rendering ExpensiveComponent');
  const result = compute(value);
  return <div>{result}</div>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleClick = useCallback(() => {
    console.log(inputRef.current.value);
  }, []);

  const computeExpensiveValue = useCallback((num) => {
    // Simulate an expensive computation
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }, []);

  const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Log Input</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ExpensiveComponent compute={computeExpensiveValue} value={memoizedValue} />
    </div>
  );
};

export default App;

// Explanation
// useCallback: The handleClick function is memoized to avoid redefining it on every render.
// useMemo: The result of computeExpensiveValue is memoized to avoid recomputing it unless count changes.
// useRef: The inputRef is used to directly access the DOM element without causing re-renders.
// React.memo: The ExpensiveComponent is wrapped with React.memo to prevent unnecessary re-renders when its props haven’t changed.
// By using these hooks and utilities, you can significantly improve the performance and efficiency of your React applications.