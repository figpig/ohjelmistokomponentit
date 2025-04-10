import * as React from 'react';
import CountDisplay from './CountDisplay.jsx';
import IncreaseButton from './IncreaseButton.jsx';
import DecreaseButton from './DecreaseButton.jsx';
import ResetButton from './ResetButton.jsx';
import DoubleIncreaseButton from './DoubleIncreaseButton.jsx';

function Counter() {
  const [count, setCount] = React.useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);
  const doubleIncrease = () => setCount(count + 2);

  return (
    <div>
      <CountDisplay count={count} />
      <IncreaseButton onClick={increase} />
      <DecreaseButton onClick={decrease} />
      <ResetButton onClick={reset} />
      <DoubleIncreaseButton onClick={doubleIncrease} />
    </div>
  );
}

export default Counter;