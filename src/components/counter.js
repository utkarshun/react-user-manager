import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
export default Counter;
