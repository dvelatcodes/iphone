import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {heroVideo, smallHeroVideo} from '../utils';
import { useEffect, useState } from "react";

const Hero = () => {
  // assign video
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  // function to change  video based on screen size
  const videoSwap = ()=>{
    if(window.innerWidth < 760) setVideoSrc(smallHeroVideo);
    else{
      setVideoSrc(heroVideo)
    }
  }
  // trigger
  useEffect(()=>{
    window.addEventListener('resize', videoSwap);

    return ()=>{
      window.removeEventListener('resize', videoSwap);
    }
  },[])
  useGSAP(()=>{
    gsap.to('#hero', {opacity: 1, delay: 1.5})
  },[])
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id='hero' className="hero-title">
          iphone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video className="pointer-events-none" muted autoPlay playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero