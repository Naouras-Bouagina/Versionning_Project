const products = [
  {
    id: 01,
    Image: "https://images.asos-media.com/products/muubaa-lightweight-tie-waist-leather-jacket-in-black/21275111-1-black?$n_480w$&wid=476&fit=constrain",
    Title: 'Lightweight tie waist leather jacket in black',
    available_quantity: 5,
    Price: 250 ,
    categorie: 'women'
    
  },

  {
    id: 02,
    Image:"http://images.asos-media.com/products/only-tia-classic-denim-jacket-in-khaki/21714321-1-kalamata?$n_480w$&wid=476&fit=constrain",
    Title: 'Classic denim jacket in khaki',
    available_quantity: 7,
    Price: 100 ,
    categorie: 'women'
   
  },

  {
    id: 03,
    Image:"http://images.asos-media.com/products/bershka-faux-suede-bomber-jacket-in-black/21176652-1-black?$n_480w$&wid=476&fit=constrain",
    Title: 'Bershka faux suede bomber jacket in black',
    available_quantity: 0,
    Price: 150 ,
    categorie: 'men'
   
  },

  {
    id: 04,
    Image:"http://images.asos-media.com/products/new-look-hooded-denim-jacket-with-jersey-sleeve-in-black/14557513-1-black?$n_480w$&wid=476&fit=constrain",
    Title: 'Hooded denim jacket with jersey sleeve in black',
    available_quantity: 4,
    Price: 200 ,
    categorie: 'men'
   
  },
  {
    id: 5,
    Image: "https://www.karenwalker.com/content/products/classic-trench-60188-tan-front-0939648001616011983.jpg?width=886&height=1329&fit=fill&bg-color=fff&canvas=886%2C1329",
    Title: 'Classic Trench Coat',
    available_quantity: 6,
    Price: 80,
    categorie: 'women'
  
   
  },
  {
    id: 6,
    Image: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    Title: 'Brown Brim',
    available_quantity: 6,
    Price: 25,
    categorie: 'acc'
  },
  {
    id: 7,
    Image: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    Title: 'Blue Beanie',
    available_quantity: 5,
    Price: 18
  },
  {
    id: 8,
    Image: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
    Title: 'Brown Cowboy',
    available_quantity: 10,
    Price: 35,
    categorie: 'acc'
  },
  {
    id: 9,
    Image: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
    Title: 'Grey Brim',
    available_quantity: 10,
    Price: 25,
    categorie: 'acc'
  },
  {
    id: 10,
    Image: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
    Title: 'Green Beanie',
    available_quantity: 5,
    Price: 18,
    categorie: 'acc'
  },
  {
    id: 11,
    Image: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
    Title: 'Palm Tree Cap',
    available_quantity: 4,
    Price: 14,
    categorie: 'acc'
  },
  {
    id: 12,
    Image: 'https://i.ibb.co/bLB646Z/red-beanie.png',
    Title: 'Red Beanie',
    available_quantity: 8,
    Price: 18,
    categorie: 'acc'
  },
  {
    id: 13,
    Image: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
    Title: 'Wolf Cap',
    available_quantity: 2,
    Price: 14,
    categorie: 'acc'
  },
  {
    id: 14,
    Image: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
    Title: 'Blue Snapback',
    available_quantity: 5,
    Price: 16,
    categorie: 'acc'
  },
  {
    id: 15,
    Image: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
    Title: 'Blue Tanktop',
    available_quantity: 4,
    Price: 25,
    categorie: 'women'
  },
  {
    id: 16,
    Image: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
    Title: 'Floral Blouse',
    available_quantity: 3,
    Price: 20,
    categorie: 'women'
  },
  {
    id: 17,
    Image: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
    Title: 'Floral Dress',
    available_quantity: 7,
    Price: 80,
    categorie: 'women'
  },
  {
    id: 18,
    Image: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
    Title: 'Red Dots Dress',
    available_quantity: 9,
    Price: 80,
    categorie: 'women'
  },
  {
    id: 19,
    Image: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
    Title: 'Striped Sweater',
    available_quantity: 2,
    Price: 45
  },
  {
    id: 20,
    Image: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
    Title: 'Yellow Track Suit',
    available_quantity: 4,
    Price: 135,
    categorie: 'women'
  },
  {
    id: 21,
    Image: 'https://i.ibb.co/qBcrsJg/white-vest.png',
    Title: 'White Blouse',
    available_quantity: 6,
    Price: 20,
    categorie: 'women'
  },
  {
    id: 22,
    Image: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
    Title: 'Camo Down Vest',
    available_quantity: 6,
    Price: 325,
    categorie: 'men'
  },
  {
    id: 23,
    Image: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
    Title: 'Floral T-shirt',
    available_quantity: 12,
    Price: 20,
    categorie: 'men'
  },
  {
    id: 24,
    Image: 'https://i.ibb.co/55z32tw/long-sleeve.png',
    Title: 'Black & White Longsleeve',
    available_quantity: 16,
    Price: 25,
    categorie: 'men'
  },
  {
    id: 25,
    Image: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
    Title: 'Pink T-shirt',
    available_quantity: 20,
    Price: 25,
    categorie: 'men'
  },
  {
    id: 26,
    Image: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
    Title: 'Jean Long Sleeve',
    available_quantity: 6,
    Price: 40,
    categorie: 'men'
  },
  {
    id: 27,
    Image: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
    Title: 'Burgundy T-shirt',
    available_quantity: 9,
    Price: 25,
    categorie: 'men'
  }

];



const users = [
    {
      'name': 'naouras',
      'password': '1234'
    },
    {
      'name': 'oumaima',
      'password': '4567'
    },
    
    
];

module.exports = { 'products': products, users: users }