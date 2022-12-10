import React from 'react';
import { Handle } from 'reactflow';

function InputHandle(props) {
  return (
    <Handle// eslint-disable-next-line react/jsx-props-no-spreading
      {...{ ...props, type: 'source' }}
      style={{
        backgroundColor: 'red',
      }}
    />
  );
}

export default InputHandle;
