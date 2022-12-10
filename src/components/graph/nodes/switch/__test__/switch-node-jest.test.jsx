import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { ReactFlowProvider } from 'reactflow';
import InputHandle from '../../../handles/input-handle';
import OutputHandle from '../../../handles/output-handle';
import SwitchNode from '../switch-node';

describe('Graph Test Suite', () => {
  let testRenderer;
  let testInstance;

  beforeAll(() => {
    testRenderer = TestRenderer.create(
      <ReactFlowProvider>
        <SwitchNode data={{}} />
      </ReactFlowProvider>,
    );
    testInstance = testRenderer.root;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('One input handle & one output should be on node', () => {
    expect(testInstance.findAllByType(InputHandle).length).toBe(1);
    expect(testInstance.findAllByType(OutputHandle).length).toBe(0);
  });

  test('Add output should create new output', () => {
    const addButton = testInstance.find((node) => node.props.children === '+');
    act(() => addButton.props.onClick(new Event('dummy event')));
    act(() => addButton.props.onClick(new Event('dummy event')));
    act(() => addButton.props.onClick(new Event('dummy event')));
    expect(testInstance.findAllByType(OutputHandle).length).toBe(3);
  });

  test('Remove output should create new output', () => {
    const addButton = testInstance.findAll((node) => node.props.children === '-')[0];
    act(() => addButton.props.onClick(new Event('dummy event')));
    expect(testInstance.findAllByType(OutputHandle).length).toBe(2);
  });
});
