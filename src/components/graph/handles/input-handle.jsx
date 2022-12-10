import React from 'react';
import PropTypes from 'prop-types';
import { Handle } from 'reactflow';

function InputHandle(props) {
  const { style } = props;
  style.backgroundColor = 'green';

  return (
    <Handle
        // eslint-disable-next-line react/jsx-props-no-spreading
      {...{
        ...props,
        type: 'target',
        style: { ...style },
      }}
    />
  );
}

InputHandle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

InputHandle.defaultProps = {
  style: {},
};

export default InputHandle;
