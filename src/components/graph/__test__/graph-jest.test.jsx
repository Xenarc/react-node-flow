import React from 'react';
import TestRenderer from 'react-test-renderer';
import ReactFlow from 'reactflow';
import Graph from '../graph';

jest.mock('../nodes/state/state-node');

describe('Graph Test Suite', () => {
  let testRenderer;
  let testInstance;

  let reactFlowInstance;
  const mockFn = {
    fitView: jest.fn(),
  };

  beforeAll(() => {
    testRenderer = TestRenderer.create(<Graph />);
    testInstance = testRenderer.root;

    reactFlowInstance = testInstance.findByType(ReactFlow);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('ReactFlow to be in document', () => {
    expect(testInstance.findByType(ReactFlow));
  });

  test('Custom nodeTypes should be provided', () => {
    expect(reactFlowInstance.props.nodeTypes).toStrictEqual(expect.objectContaining({
      stateNode: expect.any(Function),
      switchNode: expect.any(Function),
    }));
  });
});
