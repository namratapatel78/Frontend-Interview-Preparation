// Example of closure in react : useState()
// https://dev.to/mattdclarke/what-is-a-closure-example-use-cases-in-javascript-and-react-2e6j
// https://levelup.gitconnected.com/unlocking-the-power-of-closures-in-react-components-ba5903f4710a#:~:text=Jan%2029,react%20to%20make%20things%20easier.

function useState(initial) {
    let str = initial;
    return [
      // why is the state value a function? No re-render in vanilla JavaScript like in React.
      // if you just use the value (no function), then change it with the setter function(setState) and then the log value, it will reference a "stale" value (stale closure) -> the initial value not the changed value
      () => str,
      (value) => {
        str = value;
      },
    ];
  }
  
  const [state1, setState1] = useState("hello");
  const [state2, setState2] = useState("Bob");
  console.log(state1()); // hello
  console.log(state2()); // Bob
  setState1("goodbye");
  console.log(state1()); // goodbye
  console.log(state2()); // Bob