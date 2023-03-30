import { useRive } from '@rive-app/react-canvas';

export default function AnimatedDrum() {
  const { RiveComponent } = useRive({
    src: '/drum-machine.riv',
    autoplay: true,
  });
  return (
    <div className='h-full w-full'>
      <RiveComponent />
    </div>
  );
}
