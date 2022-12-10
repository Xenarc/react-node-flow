import React from 'react';
import { Position } from 'reactflow';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OutputHandle from '../../handles/output-handle';
import InputHandle from '../../handles/input-handle';

const Node = styled.div`
  background-color: #383838;
  padding: 0.4em;
  & h6{
    padding: 0;
    margin: 0;
  }
  border: 1px solid ${(props) => (props.selected ? '#fff' : '#181818')};
`;

function StateNode(props) {
  const { data, selected } = props;
  return (
    <Node selected={selected}>
      <InputHandle position={Position.Top} />
      <h6>{data.label}</h6>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
      <OutputHandle position={Position.Bottom} />
    </Node>
  );
}

StateNode.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  selected: PropTypes.bool,
};
StateNode.defaultProps = {
  selected: false,
};

export default StateNode;
