const throttle = (fn, delay) => {
    let prev = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - prev > delay) {
        fn(...args);
        prev = now;
      }
    }
  };

  document.getElementById("throttle").addEventListener(
    "click",
    throttle(() => {
      console.log("clicked");
    }, 2000));