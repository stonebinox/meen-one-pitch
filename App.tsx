import React, {useEffect, useState} from 'react';
import {SafeAreaView, Animated} from 'react-native';
import styled from 'styled-components/native';

import {spacing} from './src/utils/spacing';
import EE from './src/assets/emblem-light.png';

const AnimatedView = Animated.View;
const OneContainer = styled.View`
  width: 100vw;
  height: 100%;
  background-color: #000;
  padding: ${spacing.DOUBLE_BASE_SPACING}px;
`;

const LogoScreen = styled(AnimatedView)`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease;
`;

const Logo = styled.Image`
  width: 128px;
  margin: 0 auto;
`;

function App(): React.JSX.Element {
  const [fadeAnimation] = useState<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <OneContainer>
        <LogoScreen style={{opacity: fadeAnimation}}>
          <Logo source={EE} resizeMode="contain" />
        </LogoScreen>
      </OneContainer>
    </SafeAreaView>
  );
}

export default App;
