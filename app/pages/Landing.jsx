'use client';
import React, { useEffect, useRef ,useState} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      "gif":'https://media.tenor.com/0vwlqr2FORcAAAAM/nfs-nfsmw.gif',
    },
    {  
      'id':3,
      'img':'/imgs/nfsmwg3.png',
      "gif":'https://media.tenor.com/aAiNZt6Y2ykAAAAM/ronnie-mccrea-need-for-speed-most-wanted.gif',
    },
    {  
      'id':4,
      'img':'/imgs/nfsmwg4.png',
      "gif":'https://media.tenor.com/1L_pBQsSKEoAAAAM/razor-callahan-i-never-want-to-see-your-face-again.gif',
    },
    {  
      'id':5,
      'img':'/imgs/nfsmwg5.png',
      "gif":'https://media.tenor.com/Dm8NoD1U2vsAAAAM/need-for-speed-nfs.gif',
    },
    {  
      'id':6,
      'img':'/imgs/nfsmwg6.png',
      "gif":'https://media.tenor.com/QAvz5t4V4lcAAAAM/nfsmw-nfs.gif',
    },
    {  
      'id':7,
      'img':'/imgs/nfsmwg7.png',
      "gif":'https://media1.tenor.com/m/aRXskPQv7gQAAAAd/need-for-speed-nfs.gif',
    },
    {  
      'id':8,
      'img':'/imgs/nfsmwg8.png',
      "gif":'https://media.tenor.com/qiq3YMXJ-KwAAAAM/nfs-nfsmw.gif',
    },

  ]




  const blackListPlayersDetails = [
    {
      'id': 1,
      'black-list-position': '#1',
      'name': 'Clarence "Razor" Callahan',
      'car': 'BMW M3 GTR ALMS (E46)',
      'bounty': '10,000,000',
      'strength': 'Everything',
      'borough': 'Camden Beach'
    },
    {
      'id': 2,
      'black-list-position': '#2',
      'name': 'Toru "Bull" Sato',
      'car': 'Mercedes-Benz SLR McLaren (C199)',
      'bounty': '7,550,000',
      'strength': 'Sprint Races',
      'borough': 'Downtown Rockport'
    },
    {
      'id': 3,
      'black-list-position': '#3',
      'name': 'Ronald "Ronnie" McCrea',
      'car': 'Aston Martin DB9',
      'bounty': '5,550,000',
      'strength': 'Immobilizing Police Vehicles',
      'borough': 'Camden Beach'
    },
    {
      'id': 4,
      'black-list-position': '#4',
      'name': 'Joe "JV" Vega',
      'car': 'Dodge Viper SRT-10 (ZB I)',
      'bounty': '4,050,000',
      'strength': 'Speedtrap Races',
      'borough': 'Camden Beach'
    },
    {
      'id': 5,
      'black-list-position': '#5',
      'name': 'Wes "Webster" Allen',
      'car': 'Chevrolet Corvette C6',
      'bounty': '3,050,000',
      'strength': 'Evading Pursuits',
      'borough': 'Camden Beach'
    },
    {
      'id': 6,
      'black-list-position': '#6',
      'name': 'Hector "Ming" Domingo',
      'car': 'Lamborghini Gallardo Coupé',
      'bounty': '2,300,000',
      'strength': 'Photo Tickets',
      'borough': 'Downtown Rockport'
    },
    {
      'id': 7,
      'black-list-position': '#7',
      'name': 'Kira "Kaze" Nakazato',
      'car': 'Mercedes-Benz CLK 500 (C209)',
      'bounty': '1,680,000',
      'strength': 'Cost to State',
      'borough': 'Camden Beach'
    },
    {
      'id': 8,
      'black-list-position': '#8',
      'name': 'Jade "Jewels" Barrett',
      'car': 'Ford Mustang GT (S-197)',
      'bounty': '1,180,000',
      'strength': 'Drag Races',
      'borough': 'Camden Beach'
    },
    {
      'id': 9,
      'black-list-position': '#9',
      'name': 'Eugene "Earl" James',
      'car': 'Mitsubishi Lancer Evolution VIII (CT9A)',
      'bounty': '790,000',
      'strength': 'Sprint Races',
      'borough': 'Camden Beach'
    },
    {
      'id': 10,
      'black-list-position': '#10',
      'name': 'Karl "Baron" Smit',
      'car': 'Porsche Cayman S (987)',
      'bounty': '500,000',
      'strength': 'Infractions',
      'borough': 'Rosewood'
    },
    {
      'id': 11,
      'black-list-position': '#11',
      'name': 'Lou "Big Lou" Park',
      'car': 'Mitsubishi Eclipse GT',
      'bounty': '300,000',
      'strength': 'Tollbooth Time Trials',
      'borough': 'Rosewood'
    },
    {
      'id': 12,
      'black-list-position': '#12',
      'name': 'Isabel "Izzy" Diaz',
      'car': 'Mazda RX-8 (SE3P)',
      'bounty': '180,000',
      'strength': 'Lap Knockout Races',
      'borough': 'Rosewood'
    },
    {
      'id': 13,
      'black-list-position': '#13',
      'name': 'Victor "Vic" Vasquez',
      'car': 'Toyota Supra (JZA80)',
      'bounty': '100,000',
      'strength': 'Pursuit Length',
      'borough': 'Rosewood'
    },
    {
      'id': 14,
      'black-list-position': '#14',
      'name': 'Vince "Taz" Kilic',
      'car': 'Lexus IS 300 (JCE10)',
      'bounty': '50,000',
      'strength': 'Sprint Races',
      'borough': 'Rosewood'
    },
    {
      'id': 15,
      'black-list-position': '#15',
      'name': 'Ho "Sonny" Seun',
      'car': 'Volkswagen Golf GTI (Mk5)',
      'bounty': '20,000',
      'strength': 'Circuit Races',
      'borough': 'Rosewood'
    }
  ];


  const [clickedGif, setClickedGif] = useState(null);
  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  const blacklistRef = useRef(null);
  
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
    
    // Blacklist section
    gsap.from(blacklistRef.current.querySelector('.h-\\[20\\%\\]'), {
      x: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: blacklistRef.current,
        start: "top bottom-=100",
        end: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
        scrub:1
      }
    });
    
    // Blacklist section details
    gsap.from(blacklistRef.current.querySelector('.h-\\[80\\%\\]'), {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: blacklistRef.current.querySelector('.h-\\[20\\%\\]'),
        start: "bottom center", // Start when the bottom of the name section reaches center-----------
        end: "bottom top",
        toggleActions: "play none none reverse",
        // markers: true
      }
    });
    
    // Clean up-----------
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <>
      <div className='w-full h-fit bg-black'>
        {/* 1st sec - img */}
        <div ref={headerRef} className='w-full h-screen relative flex flex-col justify-center items-center'>
          <img className='absolute top-0 left-[40vw] lg:left-[45vw] z-20 w-[7rem] h-[3rem] rounded-b-[1rem]' src="https://media1.tenor.com/m/1jY4Vpse3scAAAAd/need-for-speed-loading-screen.gif" alt="" />

          
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
          {/* Static Image */}
          <img 
            className={`absolute z-10 w-full h-full object-cover rounded-4xl transition-opacity duration-300 ${
              clickedGif === x.id || null ? 'opacity-0' : 'opacity-100'
            } group-hover:opacity-0`}
            src={x.img} 
            alt={x.id} 
            loading='lazy'
          />
          
          {/* GIF on hover or click */}
          <img
            className={`absolute z-20 w-full h-full object-cover rounded-4xl transition-opacity duration-300 ${
              clickedGif === x.id ? 'opacity-100' : 'opacity-0'
            } group-hover:opacity-100`}
            src={x.gif}
            alt={`${x.id} animation`}
            loading='lazy'
          />
        </div>
      ))}
        </div>
        
        {/* 3rd sec - black list section --- in progressssssssssssssssssss*/}
        <div ref={blacklistRef} className='w-full h-[130vh] bg-gradient-to-bl from-blue-500 to bg-cyan-950'>
          <div className='h-[20%] w-full'>
            name
          </div>
          <div className='h-[80%] w-full'>
            pics and details
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;