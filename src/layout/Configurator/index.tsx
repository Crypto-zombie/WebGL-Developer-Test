/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import Scene from 'layout/Scene';
import Loading from 'components/Loading';

export default function Configurator() {
  return (
    <div>
      <div className='fixed h-screen w-screen'>
        <Canvas camera={{ position: [0, 20, 40], fov: 50 }} dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>

      <div className='viewport'>
        <div className='child1 h-[3000px]'>Part1</div>
      </div>
      <p className='fixed bottom-12 w-full animate-bounce text-center text-xs text-amber-100 drop-shadow-md'>
        SCROLL DOWN TO EXPLOR
      </p>
      <Loading />
    </div>
  );
}
