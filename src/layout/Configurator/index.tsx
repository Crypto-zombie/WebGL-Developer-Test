/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import Style from './style.module.scss';
import Scene from 'layout/Scene';
import Loading from 'components/Loading';

export default function Configurator() {
  return (
    <div className={Style.wrapper}>
      <Canvas camera={{ position: [0, 20, 40], fov: 50 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
      <p className='absolute bottom-12 w-full animate-bounce text-center text-xs text-amber-100 drop-shadow-md'>
        SCROLL DOWN TO EXPLOR
      </p>
      <Loading />
    </div>
  );
}
