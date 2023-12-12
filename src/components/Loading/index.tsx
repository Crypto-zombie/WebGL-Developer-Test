import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useProgress } from '@react-three/drei';

export default function Loading() {
  const { progress } = useProgress();
  const bg = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState(false);
  const [finishIn, setFinishIn] = useState(false);

  const fadeIn = () => {
    gsap.to(content.current, {
      duration: 2,
      ease: 'power1.out',
      opacity: 1,
      onComplete: () => {
        setFinishIn(true);
      },
    });
  };

  const fadeOut = () => {
    gsap.to(content.current, {
      duration: 1,
      ease: 'power1.out',
      opacity: 0,
      onComplete: () => {
        gsap.to(bg.current, {
          duration: 2,
          ease: 'power1.out',
          opacity: 0,
          onComplete: () => {
            setHide(true);
          },
        });
      },
    });
  };
  useEffect(() => {
    if (!finishIn) fadeIn();
    if (progress === 100 && finishIn) fadeOut();
  }, [progress, finishIn]);

  return hide ? null : (
    <div
      ref={bg}
      className='fixed left-0 top-0 z-[99999999] flex h-screen w-screen flex-col items-center justify-center bg-zinc-800 text-zinc-700'
    >
      <div
        ref={content}
        className='flex flex-col items-center justify-center space-y-12 opacity-0'
      >
        <p className='px-12  text-3xl tracking-wide'>WebGL Test by Evgenii</p>
        <p className='border-t border-zinc-700 px-12 py-5 text-sm tracking-wide'>
          L O A D I N G
        </p>
      </div>
    </div>
  );
}
