/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Model from 'components/Model';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Suspense } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default function Scene() {
  const { camera, scene } = useThree();

  const tl = gsap.timeline();
  tl.to(scene.rotation, {
    y: 10,
    ease: 'power2.inOut',
    overwrite: true,
    scrollTrigger: { trigger: '.child1', scrub: 0.5, endTrigger: 'child2' },
  });

  return (
    <Suspense fallback={null}>
      <Model />
      <ambientLight intensity={1} />
      <Environment preset='night' />
      <EffectComposer disableNormalPass>
        <Bloom intensity={0.5} />
      </EffectComposer>
    </Suspense>
  );
}
