import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from '../App';
import Tab from '../../components/tab/tab';

jest.mock('flexlayout-react');

describe('App Test Suite', () => {
  let testRenderer;
  let testInstance;

  beforeAll(() => {
    testRenderer = TestRenderer.create(<App />);
    testInstance = testRenderer.root;
  });

  test('Tab to be in document', () => {
    expect(testInstance.findByType(Tab));
  });
});
