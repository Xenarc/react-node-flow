import React, { useCallback, useState } from 'react';
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
  
  & tr{
    height: 1em;
  }
`;

function SwitchNode(props) {
  const { data, selected } = props;
  const [outputs, setOutputs] = useState(new Set());

  const addOutput = useCallback((output) => {
    setOutputs(new Set(outputs).add(output));
  }, [outputs]);

  const removeOutput = useCallback((output) => {
    const newOutputs = new Set(outputs);
    newOutputs.delete(output);
    setOutputs(newOutputs);
  }, [outputs]);

  return (
    <Node selected={selected}>
      <InputHandle position={Position.Left} />
      <h6>{data.label}</h6>
      <button onClick={() => addOutput(`New output${Date.now().valueOf()}`)} type="button">
        +
      </button>
      <table>
        <tbody>
          {Array.from(outputs.values()).map((output) => (
            <tr key={output}>
              <th>{output}</th>
              <td>
                <button onClick={() => removeOutput(output)} type="button">
                  -
                </button>
              </td>
              <td style={{ position: 'relative' }}>
                <OutputHandle
                  id={output}
                  position={Position.Right}
                  style={{ top: '50%', left: '0.4em' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Node>
  );
}

SwitchNode.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  selected: PropTypes.bool,
};
SwitchNode.defaultProps = {
  selected: false,
};

export default SwitchNode;
