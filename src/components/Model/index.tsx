/* eslint-disable react/no-unknown-property */
import { Group, LoopOnce, Object3DEventMap } from 'three';
import { Ref, useEffect, useState } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
const Model = () => {
  const { scene, animations } = useGLTF('/model/object.glb');
  const { ref, actions, names } = useAnimations(animations);
  const [action, setAction] = useState(0);

  // useEffect(() => {
  //   actions[names[0]]!.setLoop(LoopOnce, 1);
  //   actions[names[0]]!.reset().fadeIn(0.5).play().clampWhenFinished = true;
  //   return () => {
  //     actions[names[0]]?.fadeOut(0.5);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [action]);
  const openAnim = () => {
    actions[names[0]]!.setLoop(LoopOnce, 1);
    actions[names[0]]!.reset().fadeIn(0.5).play().clampWhenFinished = true;
  };

  return (
    <group
      ref={ref as Ref<Group<Object3DEventMap>>}
      scale={10}
      onPointerDown={() => openAnim()}
    >
      <primitive object={scene} />
    </group>
  );
};
export default Model;
