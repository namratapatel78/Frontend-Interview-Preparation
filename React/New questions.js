// Suspense -
// <Suspense> lets you display a fallback until its children have finished loading.
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>


// <Fragment>, often used via <>...</> syntax, lets you group elements without a wrapper node.
{/* <>
  <OneChild />
  <AnotherChild />
</> */}


{/* <Profiler> 
Wrap a component tree in a <Profiler> to measure its rendering performance.

<Profiler id="App" onRender={onRender}>
  <App />
</Profiler>
Props 
id: A string identifying the part of the UI you are measuring.
onRender: An onRender callback that React calls every time components within the profiled tree update. It receives information about what was rendered and how much time it took. */}

// React portal