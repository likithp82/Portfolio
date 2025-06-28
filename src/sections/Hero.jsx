import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

const Hero = () => {
  // const x = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale:{
  //     value:1,
  //     min:0.1,
  //     max:10
  //   }
  // })
  const isSmall = useMediaQuery({maxWidth:440});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({ minwidth: 768 , maxWidth:1024});
  const sizes = calculateSizes(isSmall,isMobile,isTablet)

  return (
    <section className="min-h-screen w-full flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
           Hi, I'm Likith <span className='wavingHand'>👋</span>
        </p>
        <p className='hero_tag text-center sm:text-xl text-base font-generalsans text-white'>
        Building intelligent systems that 
        <span className="text-sky-400 font-semibold animated-word"> see</span>, 
        <span className="text-emerald-400 font-semibold animated-word"> read</span>, and 
        <span className="text-pink-400 font-semibold animated-word"> reason</span>.
      </p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        {/* <Leva /> */}
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0,0,20]}/>
          <HeroCamera>
            <HackerRoom 
            //  scale = {0.07}
            //  position={[x.positionX,x.positionY,x.positionZ]} 
            //  rotation ={[x.rotationX,x.rotationY,x.rotationZ]}
            //  scale={[x.scale,x.scale,x.scale]}
            position={[0.3,-1.1,-10]} 
            rotation ={[0.4,-3.2,0.0]}
            //  position={sizes.deskPosition}
            scale={sizes.deskScale}
            //  scale={ isMobile ? 0.07 : 0.1}

            />
           </HeroCamera>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-9 w-full z-10 c-space">
        <a href= "#contact" className='w-fit'>
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  )
}

export default Hero
