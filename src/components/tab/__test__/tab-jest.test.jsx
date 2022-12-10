import React from 'react';
import TestRenderer from 'react-test-renderer';
import FlexLayout from 'flexlayout-react';
import Tab from '../tab';

jest.mock('flexlayout-react', () => ({
  Layout: '',
  Model: { fromJson: jest.fn() },
}));

describe('Tab Test Suite', () => {
  let testRenderer;
  let testInstance;

  beforeAll(() => {
    testRenderer = TestRenderer.create(<Tab />);
    testInstance = testRenderer.root;
  });

  test('FlexLayout.Layout to be in document', () => {
    expect(testInstance.findByType(FlexLayout.Layout));
  });
});
