import React, { useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionLineType,
} from 'reactflow';

import 'reactflow/dist/style.css';
import StateNode from './nodes/state/state-node';
import SwitchNode from './nodes/switch/switch-node';

import './styles/dark.css';

const initialNodes = [
  {
    id: '1', position: { x: 0, y: 0 }, type: 'stateNode', data: { label: 'My Great State No' },
  },
  {
    id: '2', position: { x: 500, y: 0 }, type: 'stateNode', data: { label: '2' },
  },
  {
    id: '3', position: { x: 250, y: -200 }, type: 'switchNode', data: { label: 'Swtich' },
  },
];

const connectionStyle = ConnectionLineType.SmoothStep;

const initialEdges = [];

const nodeTypes = { stateNode: StateNode, switchNode: SwitchNode };

function Graph() {
  const [nodes,, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => {
    setEdges((_edges) => addEdge({ ...params, type: connectionStyle }, _edges));
  }, [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      connectionLineType={connectionStyle}
      nodeTypes={nodeTypes}
      fitView
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
}

export default Graph;
