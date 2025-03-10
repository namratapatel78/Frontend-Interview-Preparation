import { useState } from "react";

// use prefix is used for convention. custom hook will work without the use prefix as well
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((currentValue) => !currentValue);
  };

  return [value, toggleValue];
}

export default useToggle;
