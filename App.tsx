import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

import {spacing} from './src/utils/spacing';

const OneContainer = styled.View`
  width: 100vw;
  height: 100%;
  background-color: #000;
  padding: ${spacing.DOUBLE_BASE_SPACING}px;
`;

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <OneContainer />
    </SafeAreaView>
  );
}

export default App;
