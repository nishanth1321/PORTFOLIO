


import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 130,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "repulse",  
          },
        },
        modes: {
          repulse: {
            distance: 150,  
            duration: 1,    
          },
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 100,
          },
        },
      },
      particles: {
        color: {
          value: "#5c9afa",
        },
        links: {
          color: "#0064ff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 0.35,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 4,  
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 500,  
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1.2 }, 
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
