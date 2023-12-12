/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls, Sparkles } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Model from 'components/Model';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Suspense } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default function Scene() {
  const { scene } = useThree();

  const tl = gsap.timeline();
  tl.to(scene.rotation, {
    y: 10,
    ease: 'power1.inOut',
    overwrite: true,
    scrollTrigger: { trigger: '.child1', scrub: 2, endTrigger: 'top bottom' },
  });

  return (
    <Suspense fallback={null}>
      <Model />
      <ambientLight intensity={1} />
      <Environment preset='night' />
      <Sparkles count={100} size={1} scale={100} />
      <EffectComposer disableNormalPass>
        <Bloom intensity={0.5} />
      </EffectComposer>
    </Suspense>
  );
}
