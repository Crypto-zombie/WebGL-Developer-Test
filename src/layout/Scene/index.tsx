/* eslint-disable react/no-unknown-property */
import Model from 'components/Model';

export default function Scene() {
  return (
    <>
      <Model />
      <ambientLight intensity={1} />
    </>
  );
}
