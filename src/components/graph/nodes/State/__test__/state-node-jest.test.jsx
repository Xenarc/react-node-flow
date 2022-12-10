import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Handle, ReactFlowProvider } from 'reactflow';
import StateNode from '../state-node';

describe('Graph Test Suite', () => {
  let testRenderer;
  let testInstance;

  beforeAll(() => {
    testRenderer = TestRenderer.create(
      <ReactFlowProvider>
        <StateNode data={{}} />
      </ReactFlowProvider>,
    );
    testInstance = testRenderer.root;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('2 Handles should be on state node', () => {
    expect(testInstance.findAllByType(Handle).length).toBe(2);
  });
});
