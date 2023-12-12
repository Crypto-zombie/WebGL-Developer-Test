/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import Style from './style.module.scss';
import Scene from 'layout/Scene';

export default function Configurator() {
  return (
    <div className={Style.wrapper}>
      <Canvas camera={{ position: [0, 0, 80], fov: 50 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
