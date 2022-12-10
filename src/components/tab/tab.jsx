import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import * as FlexLayout from 'flexlayout-react';

import Graph from '../graph/graph';
import layout from './tab-layout.json';

import 'reactflow/dist/style.css';
import 'flexlayout-react/style/dark.css';

const Flex = styled(FlexLayout.Layout)`
  width: 100%;
  height: 100%;
`;

function Tab() {
  const [model] = useState(FlexLayout.Model.fromJson(layout));
  const factory = useCallback((node) => {
    const component = node.getComponent();
    if (component === 'graph') {
      return (<Graph />);
    }
    return <div />;
  });

  return (
    <Flex model={model} factory={factory} />
  );
}

export default Tab;
