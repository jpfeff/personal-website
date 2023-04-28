import React from 'react';
import Counter from './counter';
import Controls from './controls';

function Welcome(props) {
  return (
    <div>
      <p>Welcome</p>
      <Counter />
      <Controls />
    </div>
  );
}

export default Welcome;
