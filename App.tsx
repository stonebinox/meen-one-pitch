import React, {useEffect, useState} from 'react';
import {SafeAreaView, Animated, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {spacing} from './src/utils/spacing';
import EE from './src/assets/emblem-light.png';
import {BaseText} from './src/components/common.styles';

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
`;

const Logo = styled.Image`
  width: 128px;
  margin: 0 auto;
`;

function App(): React.JSX.Element {
  const [fadeAnimation] = useState<Animated.Value>(new Animated.Value(0));
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    if (fadeIn) {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();

      return;
    }

    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fadeIn]);

  return (
    <SafeAreaView>
      <OneContainer>
        <LogoScreen style={{opacity: fadeAnimation}}>
          <Logo source={EE} resizeMode="contain" />
          <TouchableOpacity onPress={() => setFadeIn(false)}>
            <BaseText>tap to continue</BaseText>
          </TouchableOpacity>
        </LogoScreen>
      </OneContainer>
    </SafeAreaView>
  );
}

export default App;
