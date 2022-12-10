import React from 'react';
import PropTypes from 'prop-types';
import { Handle } from 'reactflow';

function OutputHandle(props) {
  const { style } = props;
  style.backgroundColor = 'red';

  return (
    <Handle
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...{
        ...props,
        type: 'source',
        style: { ...style },
      }}
    />
  );
}

OutputHandle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

OutputHandle.defaultProps = {
  style: {},
};

export default OutputHandle;
