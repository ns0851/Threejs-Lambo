import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Lamborgini from '../../public/Lamborgini';
import { Environment, Loader, OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';
import About from './About';
import Loading from './Loading';
import { useControls } from 'leva';
import { Suspense } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CameraLogger = ({ orbitControls }) => {
  const { camera, scene } = useThree();
  const tl = gsap.timeline()
  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //   cameraPosition: {
  //     value: { x: -25.15, y: 5.30, z: -10.80 }, // Match initial Canvas camera position
  //     step: 0.05
  //   },
  //   scenePosition: {
  //     value: { x: -8.25, y: 3.45, z: 13.05 }, // Match initial Canvas scene position
  //     step: 0.05
  //   },
  //   sceneRotation: {
  //     value: { x: -0.10, y: 0.03, z: -0.06 }, // Match initial Canvas scene rotation
  //     step: 0.01
  //   }
  // });


  // useFrame(() => {
  //   camera.position.x = cameraPosition.x;
  //   camera.position.y = cameraPosition.y;
  //   camera.position.z = cameraPosition.z;

  //   scene.position.x = scenePosition.x;
  //   scene.position.y = scenePosition.y;
  //   scene.position.z = scenePosition.z;

  //   scene.rotation.x = sceneRotation.x;
  //   scene.rotation.y = sceneRotation.y;
  //   scene.rotation.z = sceneRotation.z;
  // })

  useLayoutEffect(() => {
    tl.to(camera.position, {
      x: -22.90,
      y: 6.70,
      z: 7.95,
      scrollTrigger: {
        trigger: '.s2',
        scroller: 'body',
        scrub: 2,
        start: 'top bottom',
        end: 'top top',
        immediateRender: false
      }
    })
      .to(scene.position, {
        x: -15.50,
        y: 5.10,
        z: -8.95,
        scrollTrigger: {
          trigger: '.s2',
          scroller: 'body',
          scrub: 2,
          start: 'top bottom',
          end: 'top top',
          immediateRender: false
        }
      })
      .to(scene.rotation, {
        x: 0.14,
        y: -3.38,
        z: -0.06,
        scrollTrigger: {
          trigger: '.s2',
          scroller: 'body',
          scrub: 2,
          start: 'top bottom',
          end: 'top top',
          immediateRender: false
        }
      })
      .to(camera.position, {
        x: -25.15,
        y: 5.30,
        z: -10.80,
        scrollTrigger: {
          trigger: '.s3',
          scroller: 'body',
          scrub: 2,
          start: 'top bottom',
          end: 'top top',
          immediateRender: false
        }
      })
      .to(scene.position, {
        x: -10.70,
        y: 3.45,
        z: 1.65,
        scrollTrigger: {
          trigger: '.s3',
          scroller: 'body',
          scrub: 2,
          start: 'top bottom',
          end: 'top top',
          immediateRender: false  
        }
      })
      .to(scene.rotation, {
        x: -0.10,
        y: -6.23,
        z: -0.05,
        scrollTrigger: {
          trigger: '.s3',
          scroller: 'body',
          scrub: 2,
          start: 'top bottom',
          end: 'top top',
          immediateRender: false
        }
      })
  }, []);

  return null;
};

const CanvasContainer = () => {
  const orbitControlsRef = useRef();

  return (
    
    <Canvas scene={{ position: [-9.35, 3.45, 6.70], rotation: [-0.10, 0.03, -0.06] }} camera={{ position: [-24.40, 5.30, -10.80] }}>
       {/* <directionalLight
        castShadow
        position={[-2.38, 1.32, 0.74]}
        intensity={5}
      /> */}
      <OrbitControls
        ref={orbitControlsRef}
        enableZoom={false}
      />
      <CameraLogger orbitControls={orbitControlsRef} />
      {/* <Suspense fallback={<Loading />}> */}
        <Lamborgini scale={[2, 2, 2]}/>
      {/* </Suspense> */}
      <Environment preset="city" />
    </Canvas>
  );
};

export default CanvasContainer;
