'use client';
import React, { useEffect, useLayoutEffect, useRef ,useState} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import blackListPlayersDetails from '../datas/BlackLists';

function Landing() {


  const imgGallaryDataSetting = [
    {  
      'id':1,
      'img':'/imgs/nfsmwg1.png',
      "gif":'https://media1.tenor.com/m/tPk_EIwIgEMAAAAd/need-for-speed-nfs.gif',
    },
    {  
      'id':2,
      'img':'/imgs/nfsmwg2.png',
      "gif":'https://media1.tenor.com/m/0vwlqr2FORcAAAAd/nfs-nfsmw.gif',
    },
    {  
      'id':3,
      'img':'/imgs/nfsmwg3.png',
      "gif":'https://media1.tenor.com/m/BLzYFzAgruYAAAAd/need-for-speed-nfs-most-wanted.gif',
    },
    {  
      'id':4,
      'img':'/imgs/nfsmwg4.png',
      "gif":'https://media1.tenor.com/m/1L_pBQsSKEoAAAAC/razor-callahan-i-never-want-to-see-your-face-again.gif',
    },
    {  
      'id':5,
      'img':'/imgs/nfsmwg5.png',
      "gif":'https://media1.tenor.com/m/Dm8NoD1U2vsAAAAC/need-for-speed-nfs.gif',
    },
    {  
      'id':6,
      'img':'/imgs/nfsmwg6.png',
      "gif":'https://media1.tenor.com/m/o1r2KfF3DxoAAAAd/nfsmw-nfs.gif',
    },
    {  
      'id':7,
      'img':'/imgs/nfsmwg7.png',
      "gif":'https://media1.tenor.com/m/aRXskPQv7gQAAAAd/need-for-speed-nfs.gif',
    },
    {  
      'id':8,
      'img':'/imgs/nfsmwg8.png',
      "gif":'https://media1.tenor.com/m/qiq3YMXJ-KwAAAAd/nfs-nfsmw.gif',
    },

  ]




  


  const [clickedGif, setClickedGif] = useState(null);
  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  // const blacklistRef = useRef(null);
  // const blacklistContainerRef = useRef(null);
  const blacklistImgRef = useRef(null);
  const blacklistDetailsRef = useRef(null);
  const blacklistCarImgRef = useRef(null);
  const blacklistNumberRef = useRef(null);
  const blacklistNameRef = useRef(null);

  const [activeBlacklistIndex, setActiveBlacklistIndex] = useState(0);
  const blacklistRef = useRef(null);
  const blacklistContainerRef = useRef(null);
  const blacklistItemsRef = useRef([]);
  
  useEffect(() => {
   
    gsap.registerPlugin(ScrollTrigger);
    

    // Header section animation with ScrollTrigger-----------
    gsap.from(headerRef.current.querySelector('h2'), {
      y: 500,
      opacity: 0,
      duration: 1, // This is in seconds because we're not using scrub here-----------
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top center", // Start animation when the top of header reaches center of viewport----------
        end: "bottom center", // End animation when the bottom of header reaches center of viewport-----------
        // markers: true, 
      }
    });
    

    // Gallery section-----------
    const galleryItems = galleryRef.current.querySelectorAll('div');
    gsap.from(galleryItems, {
      scale: 0.5,
      rotate:'20rad',
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top bottom-=100", // Start animation when top of gallery is 100px above the bottom of viewport-----------
        end: "center center",
        toggleActions: "play none none reverse",
        // markers: true,
        scrub:1
      }
    });
    

    // // Blacklist section
    // gsap.from(blacklistRef.current.querySelector('.h-\\[20\\%\\]'), {
    //   x: -100,
    //   opacity: 0,
    //   duration: 0.5,
    //   scrollTrigger: {
    //     trigger: blacklistRef.current,
    //     start: "top bottom-=100",
    //     end: "top center",
    //     toggleActions: "play none none reverse",
    //     // markers: true,
    //     scrub:1
    //   }
    // });
    

    // // Blacklist section details
    // gsap.from(blacklistRef.current.querySelector('.h-\\[80\\%\\]'), {
    //   y: 100,
    //   opacity: 0,
    //   duration: 0.5,
    //   scrollTrigger: {
    //     trigger: blacklistRef.current.querySelector('.h-\\[20\\%\\]'),
    //     start: "bottom center", // Start when the bottom of the name section reaches center-----------
    //     end: "bottom top",
    //     toggleActions: "play none none reverse",
    //     // markers: true
    //   }
    // });
    

    // Clean up-----------
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const blacklistItems = blacklistItemsRef.current;
    
    // Calculate total scroll distance based on number of items
    const itemCount = blackListPlayersDetails.length;
    const scrollDistance = itemCount * window.innerHeight;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blacklistRef.current,
        start: "top top",
        end: `+=${scrollDistance}`, // Dynamic calculation based on item count
        pin: true,
        scrub: 1,
        markers: true, // For debugging - remove in production
        snap: {
          snapTo: 1 / (itemCount - 1), // Snap to each item
          duration: {min: 0.2, max: 0.8}, // Adjust snap speed
          delay: 0,
          ease: "power1.inOut"
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            Math.floor(progress * itemCount), 
            itemCount - 1 // Ensure we don't exceed array bounds
          );
          setActiveBlacklistIndex(index);
        }
      }
    });
  
    // Animate each blacklist item
    // blacklistItems.forEach((item, i) => {
    //   tl.fromTo(item, 
    //     { opacity: 0, y: 100 },
    //     { opacity: 1, y: 0, duration: 0.5 },
    //     i * 0.5
    //   );
    // });
  
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [blackListPlayersDetails]); // Add dependency to re-run when data changes



  useLayoutEffect(()=>{

    const ctx = gsap.context(()=>{
      gsap.from(blacklistImgRef.current,{
        opacity:0,
        scale:0,
        ease:'power3.inOut'
      })

      gsap.from(blacklistCarImgRef.current,{
        x:-200,
        opacity:0,
        ease:'power3.inOut'
      })

      gsap.from(blacklistNumberRef.current,{
        y:-100
      })

      gsap.from(blacklistNameRef.current,{
        scale:50,
        y:100
      })

    })  

  return ()=> ctx.revert()
  },[activeBlacklistIndex])

  // Add items to the ref array
  const addToRefs = (el) => {
    if (el && !blacklistItemsRef.current.includes(el)) {
      blacklistItemsRef.current.push(el);
    }
  };




  // useLayoutEffect(()=>{
  //   const tl = gsap.timeline({
  //     scrollTrigger:{
  //       trigger:blacklistRef.current,
  //       start:'top top',
  //       end:'bottom bottom',
  //       pin:true,
  //       markers:true
  //     }
  //   })
  //   tl.to(blacklistDetailsRef.current,{
  //     y:500,
  //     duration:1
  //   })
  // },[])
  

  return (
    <>
      <div className='w-full h-fit bg-black'>
        {/* 1st sec - img */}
        <div ref={headerRef} className='w-full h-screen relative flex flex-col justify-center items-center'>
          <img className='absolute top-0 left-[50%] lg:left-[45%] z-20 w-[7rem] h-[3rem] rounded-b-[1rem]' src="https://media1.tenor.com/m/1jY4Vpse3scAAAAd/need-for-speed-loading-screen.gif" alt="" />

          
          <img loading='lazy' className='absolute w-full h-full object-cover' src="/imgs/nfslanding.jpg" alt="" />
          <h2 className='relative text-center text-5xl font-extrabold w-full'>NFS MOST WANTED</h2>
        </div>
        
        {/* 2nd sec - img gallery*/}
        <div ref={galleryRef} className='w-full h-fit my-2 grid grid-cols-2 justify-items-center align-middle gap-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden'>
        {imgGallaryDataSetting?.map((x) => (
        <div 
          key={x.id} 
          className="group h-[15rem] w-full cursor-pointer relative overflow-hidden"
          onClick={() => setClickedGif(clickedGif === x.id ? null : x.id)}
        >

          <img 
            className={`absolute z-10 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
              clickedGif === x.id || null ? 'opacity-0' : 'opacity-100'
            } group-hover:opacity-0`}
            src={x.img} 
            alt={x.id} 
            loading='lazy'
          />
          
          {/* GIF on hover or click */}
          <img
            className={`absolute z-20 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
              clickedGif === x.id ? 'opacity-100 ' : 'opacity-0'
            } group-hover:opacity-100`}
            src={x.gif}
            alt={`${x.id} animation`}
            loading='lazy'
          />
        </div>
      ))}
        </div>
        
        {/* 3rd sec - black list section --- in progressssssssssssssssssss*/}
        {/* Blacklist Section */}
        <div ref={blacklistRef} className='w-full min-h-screen bg-gradient-to-b from-black via-slate-800 to-black pt-3 relative'>
          

          <div ref={blacklistContainerRef} className='container mx-auto  flex flex-col justify-center items-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-12rem)]'>


            <div className='text-center mb-1 md:mb-12  pb-2 w-full max-w-md mx-auto'>
              <p ref={blacklistNumberRef} className='text-xl font-semibold uppercase tracking-wider text-red-300 mb-1'>
                {blackListPlayersDetails[activeBlacklistIndex]?.black_list_position || '??'}
              </p>
              <h1 ref={blacklistNameRef} className='text-2xl sm:text-5xl font-bold text-gray-100 font-["Impact",_"Arial_Black",_sans-serif]'> {/* Example Font */}
                {blackListPlayersDetails[activeBlacklistIndex]?.name || 'UNKNOWN'}
              </h1>
            </div>


            <div className='flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-6 md:gap-8 items-stretch'> {/* items-stretch */}

              <div
                ref={addToRefs}
                className='flex flex-col bg-black/30 text-gray-200 p-3 rounded shadow-md w-full h-fit md:w-1/2 lg:w-2/5 border-l-4 border-black'
              >
                <div className='mb-auto space-y-1'>
                  <p className='flex justify-between'><strong>Borough:</strong> <span>{blackListPlayersDetails[activeBlacklistIndex]?.borough || 'Undisclosed'}</span></p>
                  <p className='flex justify-between'><strong>Strength:</strong> <span>{blackListPlayersDetails[activeBlacklistIndex]?.strength || 'Unknown'}</span></p>
                  <p className='flex justify-between items-center'>
                      <strong>Bounty:</strong>
                      <span className='text-xl font-bold text-emerald-500 px-2 py-0.5 rounded'>
                          {blackListPlayersDetails[activeBlacklistIndex]?.bounty ? `${blackListPlayersDetails[activeBlacklistIndex]?.bounty}` : 'N/A'}
                      </span>
                  </p>
                </div>

                <div className="mt-2 border-t border-gray-400">
                  <p className='font-semibold mb-1'>{blackListPlayersDetails[activeBlacklistIndex]?.car || 'Vehicle Unknown'}</p>
                  <img
                    ref={blacklistCarImgRef}
                    src={blackListPlayersDetails[activeBlacklistIndex]?.car_img}
                    alt={blackListPlayersDetails[activeBlacklistIndex]?.car || 'Car Image'}
                    className='w-full h-24 md:h-36 lg:h-64 object-cover rounded bg-gray-300 p-1 border border-gray-400'
                  />
                </div>
              </div>

              <div
                ref={blacklistImgRef}
                className='w-full md:w-1/2 lg:w-3/5 flex justify-center items-center bg-black/30 p-2 rounded shadow-inner' // Inner shadow for depth
              >
                <img
                  src={blackListPlayersDetails[activeBlacklistIndex]?.pic}
                  alt={blackListPlayersDetails[activeBlacklistIndex]?.name || 'Mugshot'}
                  className='max-h-80 h-56 md:h-[32rem] object-contain rounded border-4 border-gray-400 shadow-lg filter saturate-75 contrast-125' // Example filter
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Landing;