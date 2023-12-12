/* eslint-disable react/no-unknown-property */
import { Environment } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Model from 'components/Model';
import { Suspense } from 'react';

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Model />
      <ambientLight intensity={1} />
      <Environment preset='night' />
      <EffectComposer disableNormalPass>
        <Bloom intensity={20} luminanceSmoothing={1} />
      </EffectComposer>
    </Suspense>
  );
}
