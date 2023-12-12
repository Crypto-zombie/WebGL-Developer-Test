/* eslint-disable react/no-unknown-property */
import { Environment } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Model from 'components/Model';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Suspense } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default function Scene() {
  const { camera } = useThree();

  const tl = gsap.timeline();
  tl.to(camera.rotation, {
    y: 0.1,
    ease: 'power2.inOut',
    overwrite: true,
    scrollTrigger: { trigger: '.child1', scrub: 1, pin: true },
  })
    .to(camera.rotation, {
      y: 0.3,
      overwrite: true,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: '.child2', scrub: 1, pin: true },
    })
    .to(camera.rotation, {
      y: 0.3,
      overwrite: true,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: '.child3', scrub: 1, pin: true },
    })
    .to(camera.rotation, {
      y: 0.3,
      overwrite: true,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: '.child4', scrub: 1, pin: true },
    });

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
