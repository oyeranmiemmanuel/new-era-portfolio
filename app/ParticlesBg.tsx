// npm install react-tsparticles tsparticles
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleBg() {
  const init = async (main) => await loadFull(main);
  return (
    <Particles
      init={init}
      options={{
        particles: {
          number: { value: 80 },
          links: { enable: true, color: '#ffffff', opacity: 0.2 },
          move: { enable: true, speed: 1 },
          color: { value: '#ffffff' },
          size: { value: 2 }
        },
        background: { color: '#0a0a1a' }
      }}
    />
  );
}