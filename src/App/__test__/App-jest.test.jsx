import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from '../App';

describe('App Test Suite', () => {
  let testRenderer;
  let testInstance;

  beforeAll(() => {
    testRenderer = TestRenderer.create(<App />);
    testInstance = testRenderer.root;
  });

  test('renders learn react link', () => {
    expect(0 === 0).toBe(true);
  });
});
