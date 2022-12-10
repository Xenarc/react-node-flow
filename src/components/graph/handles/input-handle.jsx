import React from 'react';
import { Handle } from 'reactflow';

function OutputHandle(props) {
  return (
    <Handle
      type="source"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...{ ...props, type: 'target' }}
      style={{
        backgroundColor: 'green',
      }}
    />
  );
}

export default OutputHandle;
