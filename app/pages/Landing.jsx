'use client';
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import blackListPlayersDetails from '../datas/BlackLists';

// Register plugin once at module level
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Landing() {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const imgGallaryDataSetting = [
    {
      'id': 1,
      'img': '/imgs/nfsmwg1.png',
      "gif": 'https://media1.tenor.com/m/tPk_EIwIgEMAAAAd/need-for-speed-nfs.gif',
    },
    {
      'id': 2,
      'img': '/imgs/nfsmwg2.png',
      "gif": 'https://media1.tenor.com/m/0vwlqr2FORcAAAAd/nfs-nfsmw.gif',
    },
    {
      'id': 3,
      'img': '/imgs/nfsmwg3.png',
      "gif": 'https://media1.tenor.com/m/BLzYFzAgruYAAAAd/need-for-speed-nfs-most-wanted.gif',
    },
    {
      'id': 4,
      'img': '/imgs/nfsmwg4.png',
      "gif": 'https://media1.tenor.com/m/1L_pBQsSKEoAAAAC/razor-callahan-i-never-want-to-see-your-face-again.gif',
    },
    {
      'id': 5,
      'img': '/imgs/nfsmwg5.png',
      "gif": 'https://media1.tenor.com/m/Dm8NoD1U2vsAAAAC/need-for-speed-nfs.gif',
    },
    {
      'id': 6,
      'img': '/imgs/nfsmwg6.png',
      "gif": 'https://media1.tenor.com/m/o1r2KfF3DxoAAAAd/nfsmw-nfs.gif',
    },
    {
      'id': 7,
      'img': '/imgs/nfsmwg7.png',
      "gif": 'https://media1.tenor.com/m/aRXskPQv7gQAAAAd/need-for-speed-nfs.gif',
    },
    {
      'id': 8,
      'img': '/imgs/nfsmwg8.png',
      "gif": 'https://media1.tenor.com/m/qiq3YMXJ-KwAAAAd/nfs-nfsmw.gif',
    },
  ];

  const [clickedGif, setClickedGif] = useState(null);
  const headerRef = useRef(null);
  const galleryRef = useRef(null);

  const [activeBlacklistIndex, setActiveBlacklistIndex] = useState(0);
  const blacklistRef = useRef(null);
  const blacklistContainerRef = useRef(null);

  // Preload all images before showing the website
  useEffect(() => {
    const preloadImages = async () => {
      // Collect all image URLs to preload
      const imageUrls = [
        // Landing background
        '/imgs/nfslanding.jpg',
        // Loading gif (preload first)
        'https://media1.tenor.com/m/1jY4Vpse3scAAAAd/need-for-speed-loading-screen.gif',
        // Gallery images
        ...imgGallaryDataSetting.map(item => item.img),
        ...imgGallaryDataSetting.map(item => item.gif),
        // Blacklist images (filter out empty strings)
        ...blackListPlayersDetails.map(item => item.car_img).filter(url => url),
        ...blackListPlayersDetails.map(item => item.pic).filter(url => url),
      ];

      let loadedCount = 0;
      const totalImages = imageUrls.length;

      // Preload each image
      const loadImage = (url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
            resolve();
          };
          img.onerror = () => {
            // Still count failed images to not block loading
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
            resolve();
          };
          img.src = url;
        });
      };

      // Load all images in parallel
      await Promise.all(imageUrls.map(loadImage));

      // Add a small delay for the loading animation to complete
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    preloadImages();
  }, []);

  // Main ScrollTrigger setup - runs once content is loaded
  useLayoutEffect(() => {
    // Don't setup ScrollTrigger while loading
    if (isLoading) return;

    // Create a context for proper cleanup
    const ctx = gsap.context(() => {

      // Header section animation
      gsap.from(headerRef.current.querySelector('h2'), {
        y: 500,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top center",
          end: "bottom center",
        }
      });

      // Gallery section animation
      const galleryItems = galleryRef.current.querySelectorAll('div');
      gsap.from(galleryItems, {
        scale: 0.5,
        rotate: '20rad',
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top bottom-=100",
          end: "center center",
          toggleActions: "play none none reverse",
          scrub: 1
        }
      });

      // Blacklist section with pinning
      const itemCount = blackListPlayersDetails.length;
      const scrollDistance = itemCount * window.innerHeight; // Full viewport height per character for slower scrolling

      gsap.timeline({
        scrollTrigger: {
          trigger: blacklistRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (itemCount - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0,
            ease: "power1.inOut"
          },
          onUpdate: (self) => {
            const progress = self.progress;
            // Use same calculation as snap to ensure alignment
            const index = Math.round(progress * (itemCount - 1));
            setActiveBlacklistIndex(index);
          }
        }
      });

    }, [headerRef, galleryRef, blacklistRef]); // Scope context to these refs

    // Cleanup function
    return () => ctx.revert();
  }, [isLoading]); // Re-run when loading completes

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
        <img
          src="https://media1.tenor.com/m/1jY4Vpse3scAAAAd/need-for-speed-loading-screen.gif"
          alt="Loading..."
          className="w-48 h-auto mb-8"
        />
        <div className="w-64 h-2 bg-black rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        <p className="text-gray-400 mt-4 text-sm font-mono">{loadingProgress}%</p>
      </div>
    );
  }
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
                className={`absolute z-10 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${clickedGif === x.id || null ? 'opacity-0' : 'opacity-100'
                  } group-hover:opacity-0`}
                src={x.img}
                alt={x.id}
                loading='lazy'
              />

              {/* GIF on hover or click */}
              <img
                className={`absolute z-20 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${clickedGif === x.id ? 'opacity-100 ' : 'opacity-0'
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


            <div key={`blacklist-${activeBlacklistIndex}`} className='text-center mb-1 md:mb-12  pb-2 w-full max-w-md mx-auto'>
              <p className='text-xl font-semibold uppercase tracking-wider text-red-300 mb-1'>
                {blackListPlayersDetails[activeBlacklistIndex]?.black_list_position || '??'}
              </p>
              <h1 className='text-2xl sm:text-5xl font-bold text-gray-100 font-["Impact",_"Arial_Black",_sans-serif]'>
                {blackListPlayersDetails[activeBlacklistIndex]?.name || 'UNKNOWN'}
              </h1>
            </div>


            <div className='flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-6 md:gap-8 items-stretch'>

              <div
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
                  {blackListPlayersDetails[activeBlacklistIndex]?.car_img ? (
                    <img
                      key={`car-${activeBlacklistIndex}`}
                      src={blackListPlayersDetails[activeBlacklistIndex].car_img}
                      alt={blackListPlayersDetails[activeBlacklistIndex]?.car || 'Car Image'}
                      className='w-full h-24 md:h-36 lg:h-64 object-cover rounded bg-gray-300 p-1 border border-gray-400'
                    />
                  ) : (
                    <div
                      key={`car-placeholder-${activeBlacklistIndex}`}
                      className='w-full h-24 md:h-36 lg:h-64 flex items-center justify-center rounded bg-gray-700 p-1 border border-gray-400 text-gray-400'
                    >
                      No Image Available
                    </div>
                  )}
                </div>
              </div>

              <div
                className='w-full md:w-1/2 lg:w-3/5 flex justify-center items-center bg-black/30 p-2 rounded shadow-inner'
              >
                {blackListPlayersDetails[activeBlacklistIndex]?.pic ? (
                  <img
                    key={`portrait-${activeBlacklistIndex}`}
                    src={blackListPlayersDetails[activeBlacklistIndex].pic}
                    alt={blackListPlayersDetails[activeBlacklistIndex]?.name || 'Mugshot'}
                    className='max-h-80 h-56 md:h-[32rem] object-contain rounded border-4 border-gray-400 shadow-lg filter saturate-75 contrast-125'
                  />
                ) : (
                  <div
                    key={`portrait-placeholder-${activeBlacklistIndex}`}
                    className='max-h-80 h-56 md:h-[32rem] w-full flex items-center justify-center rounded border-4 border-gray-600 text-gray-400'
                  >
                    No Portrait Available
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Landing;