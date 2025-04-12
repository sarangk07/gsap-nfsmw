const blackListPlayersDetails = [
    {
      'id': 1,
      'black_list_position': '#1',
      'name': 'Clarence "Razor" Callahan',
      'car': 'Ford Mustang GT',
      'car_img':'https://i.redd.it/qdojmfmj65k41.jpg',
      'pic':'https://eckyledavidsonneedforspeed.wordpress.com/wp-content/uploads/2017/10/razor-says-fight-if-you-want-them.jpg',
      'bounty': '10,000,000',
      'strength': 'Everything',
      'borough': 'Camden Beach'
    },
    {
      'id': 2,
      'black_list_position': '#2',
      'name': 'Toru "Bull" Sato',
      'car': 'Mercedes-Benz SLR McLaren (C199)',
      'car_img':'https://i.ytimg.com/vi/yBgAq2mBgho/sddefault.jpg',
      'pic':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NVpCKYmmNFO9Whc7qo0abMBgo1AOzy431w&s',
      'bounty': '7,550,000',
      'strength': 'Sprint Races',
      'borough': 'Downtown Rockport'
    },
    {
      'id': 3,
      'black_list_position': '#3',
      'name': 'Ronald "Ronnie" McCrea',
      'car': 'Aston Martin DB9',
      'car_img':'https://i.ytimg.com/vi/YG23NM-hats/maxresdefault.jpg',
      'pic':'https://i.ytimg.com/vi/fkRS6osyzyU/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgTihBMA8=&rs=AOn4CLD4kjEo3IoTptnFrH-1oVnSwnchxA',
      'bounty': '5,550,000',
      'strength': 'Immobilizing Police Vehicles',
      'borough': 'Camden Beach'
    },
    {
      'id': 4,
      'black_list_position': '#4',
      'name': 'Joe "JV" Vega',
      'car': 'Dodge Viper SRT-10 (ZB I)',
      'car_img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbNqcUzgA453Al0gbKUzTqKB7xjP1nLR4bg&s',
      'pic':'https://i.ytimg.com/vi/bnZBQUwH7dg/hqdefault.jpg',
      'bounty': '4,050,000',
      'strength': 'Speedtrap Races',
      'borough': 'Camden Beach'
    },
    {
      'id': 5,
      'black_list_position': '#5',
      'name': 'Wes "Webster" Allen',
      'car': 'Chevrolet Corvette C6',
      'car_img':'https://i.ytimg.com/vi/hJ5X1V01yco/maxresdefault.jpg',
      'pic':'https://i.ytimg.com/vi/gOQWW_cVjj0/maxresdefault.jpg',
      'bounty': '3,050,000',
      'strength': 'Evading Pursuits',
      'borough': 'Camden Beach'
    },
    {
      'id': 6,
      'black_list_position': '#6',
      'name': 'Hector "Ming" Domingo',
      'car': 'Lamborghini Gallardo Coupé',
      'car_img':'https://supercarblondie.com/wp-content/uploads/Screenshot-2025-03-14-104719.webp',
      'pic':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUit9uEuoSJ-gKKaEs805osjBGHMhJ1UfZqA&s',
      'bounty': '2,300,000',
      'strength': 'Photo Tickets',
      'borough': 'Downtown Rockport'
    },
    {
      'id': 7,
      'black_list_position': '#7',
      'name': 'Kira "Kaze" Nakazato',
      'car': 'Mercedes-Benz CLK 500 (C209)',
      'car_img':'https://preview.redd.it/kira-nakazato-kaze-style-paint-using-hot-pursuit-remastered-v0-lb1yhp69jbdb1.png?width=1655&format=png&auto=webp&s=fd52227ad13848fd485742b35ff63da9e41ab5df',
      'pic':'https://cdn.staticneo.com/w/needforspeed/Nfs_char_7a.jpg',
      'bounty': '1,680,000',
      'strength': 'Cost to State',
      'borough': 'Camden Beach'
    },
    {
      'id': 8,
      'black_list_position': '#8',
      'name': 'Jade "Jewels" Barrett',
      'car': 'Ford Mustang GT (S-197)',
      'car_img':'',
      'pic':'',
      'bounty': '1,180,000',
      'strength': 'Drag Races',
      'borough': 'Camden Beach'
    },
    {
      'id': 9,
      'black_list_position': '#9',
      'name': 'Eugene "Earl" James',
      'car': 'Mitsubishi Lancer Evolution VIII (CT9A)',
      'car_img':'https://i.ytimg.com/vi/r7g1O6PLgUg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5YcDTHjseuvTCnPW8Tk5kUzdm7w',
      'pic':'https://i.ytimg.com/vi/raPsY5MwT0k/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgUChDMA8=&rs=AOn4CLA2HVc4PXe-kBVxWTRZp9lZqmwjbA',
      'bounty': '790,000',
      'strength': 'Sprint Races',
      'borough': 'Camden Beach'
    },
    {
      'id': 10,
      'black_list_position': '#10',
      'name': 'Karl "Baron" Smit',
      'car': 'Porsche Cayman S (987)',
      'car_img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHSJO36ss5zFy3mq11oCu7x6on_nsAm3tIg&s',
      'pic':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpNilqPdRJ9zonjn3GMOknC3PRSNk4CxadhA&s',
      'bounty': '500,000',
      'strength': 'Infractions',
      'borough': 'Rosewood'
    },
    {
      'id': 11,
      'black_list_position': '#11',
      'name': 'Lou "Big Lou" Park',
      'car': 'Mitsubishi Eclipse GT',
      'car_img':'',
      'pic':'',
      'bounty': '300,000',
      'strength': 'Tollbooth Time Trials',
      'borough': 'Rosewood'
    },
    {
      'id': 12,
      'black_list_position': '#12',
      'name': 'Isabel "Izzy" Diaz',
      'car': 'Mazda RX-8 (SE3P)',
      'car_img':'',
      'pic':'',
      'bounty': '180,000',
      'strength': 'Lap Knockout Races',
      'borough': 'Rosewood'
    },
    {
      'id': 13,
      'black_list_position': '#13',
      'name': 'Victor "Vic" Vasquez',
      'car': 'Toyota Supra (JZA80)',
      'car_img':'',
      'pic':'',
      'bounty': '100,000',
      'strength': 'Pursuit Length',
      'borough': 'Rosewood'
    },
    {
      'id': 14,
      'black_list_position': '#14',
      'name': 'Vince "Taz" Kilic',
      'car': 'Lexus IS 300 (JCE10)',
      'car_img':'',
      'pic':'',
      'bounty': '50,000',
      'strength': 'Sprint Races',
      'borough': 'Rosewood'
    },
    {
      'id': 15,
      'black_list_position': '#15',
      'name': 'Ho "Sonny" Seun',
      'car': 'Volkswagen Golf GTI (Mk5)',
      'car_img':'',
      'pic':'',
      'bounty': '20,000',
      'strength': 'Circuit Races',
      'borough': 'Rosewood'
    }
  ];

  export default blackListPlayersDetails;