import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  top = [
    {
      id: '1top',
      name: "Men's 501 Black Regular Fit Jeans",
      image: '../../assets/top/p1.jpg',
      price: 6000,
      sizes: {
        small: true,
        xl: false,
        xxl: true,
        xs: true,
        M: true,
      },
      colors: ['black', 'grey'],
      Description:
        "A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic, you can wear with anything. Complete your casual wardrobe with a splash of style with these 511 slim fit jeans from Levi's.",
      Fit_and_sizing: {
        length: 'extra durable',
        pocket: 'curved pocket',
        fit: 'Slim Fit From Hip To Ankle',
      },
      Composition: '48% Cotton 24% Polyester 26% Viscose 2% Elastane',
      Additional: {
        exposure: 'lightweight',
        marketedBy:
          'Marketed by: Levis Strauss (India) Pvt. Ltd. ITC Green Centre, 5th Floor - North Tower No 18, Banaswadi Main Road, Maruthi Seva Nagar, Bangalore - 560005',
      },
    },
    {
      id: '2top',
      name: "Men's 509 Jeans",
      image: '../../assets/top/p2.jpg',
      price: 6000,
      sizes: {
        small: true,
        xl: false,
        xxl: true,
        xs: true,
        M: true,
      },
      colors: ['black', 'grey', 'brown'],
      Description:
        "A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic, you can wear with anything. Complete your casual wardrobe with a splash of style with these 511 slim fit jeans from Levi's.",
      Fit_and_sizing: {
        length: 'extra durable',
        pocket: 'curved pocket',
        fit: 'Slim Fit From Hip To Ankle',
      },
      Composition: '48% Cotton 24% Polyester 26% Viscose 2% Elastane',
      Additional: {
        exposure: 'lightweight',
        marketedBy:
          'Marketed by: Levis Strauss (India) Pvt. Ltd. ITC Green Centre, 5th Floor - North Tower No 18, Banaswadi Main Road, Maruthi Seva Nagar, Bangalore - 560005',
      },
    },
    {
      id: '3top',
      name: "Men's 300  T-shirt",
      image: '../../assets/top/p3.jpg',
      price: 6000,
      sizes: {
        small: true,
        xl: false,
        xxl: true,
        xs: true,
        M: true,
      },
      colors: ['red'],
      Description:
        "A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic, you can wear with anything. Complete your casual wardrobe with a splash of style with these 511 slim fit jeans from Levi's.",
      Fit_and_sizing: {
        length: 'extra durable',
        pocket: 'curved pocket',
        fit: 'Slim Fit From Hip To Ankle',
      },
      Composition: '48% Cotton 24% Polyester 26% Viscose 2% Elastane',
      Additional: {
        exposure: 'lightweight',
        marketedBy:
          'Marketed by: Levis Strauss (India) Pvt. Ltd. ITC Green Centre, 5th Floor - North Tower No 18, Banaswadi Main Road, Maruthi Seva Nagar, Bangalore - 560005',
      },
    },
    {
      id: '4top',
      name: "Men's essentials",
      image: '../../assets/top/p4.jpg',
      price: 6000,
      sizes: {
        small: true,
        xl: false,
        xxl: true,
        xs: true,
        M: true,
      },
      colors: ['pink', 'orange'],
      Description:
        "A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic, you can wear with anything. Complete your casual wardrobe with a splash of style with these 511 slim fit jeans from Levi's.",
      Fit_and_sizing: {
        length: 'extra durable',
        pocket: 'curved pocket',
        fit: 'Slim Fit From Hip To Ankle',
      },
      Composition: '48% Cotton 24% Polyester 26% Viscose 2% Elastane',
      Additional: {
        exposure: 'lightweight',
        marketedBy:
          'Marketed by: Levis Strauss (India) Pvt. Ltd. ITC Green Centre, 5th Floor - North Tower No 18, Banaswadi Main Road, Maruthi Seva Nagar, Bangalore - 560005',
      },
    },
  ];

  newReleases = [
    {
      id: '1new',
      name: "Men's stuff",
      image: '../../assets/new/p1.jpg',
      price: 6000,
      sizes: {
        small: true,
        xl: false,
        xxl: true,
        xs: true,
        M: true,
      },
      colors: ['pink', 'orange', 'red'],
      Description:
        "A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic, you can wear with anything. Complete your casual wardrobe with a splash of style with these 511 slim fit jeans from Levi's.",
      Fit_and_sizing: {
        length: 'extra durable',
        pocket: 'curved pocket',
        fit: 'Slim Fit From Hip To Ankle',
      },
      Composition: '48% Cotton 24% Polyester 26% Viscose 2% Elastane',
      Additional: {
        exposure: 'lightweight',
        marketedBy:
          'Marketed by: Levis Strauss (India) Pvt. Ltd. ITC Green Centre, 5th Floor - North Tower No 18, Banaswadi Main Road, Maruthi Seva Nagar, Bangalore - 560005',
      },
    },
    {
      id: '2new',
      name: "Women's stuff",
      image: '../../assets/new/p2.jpg',
      price: 6000,
      sizes: {
        small: true,
        xl: false,
        xxl: true,
        xs: true,
        M: true,
      },
      colors: ['pink', 'orange'],
      Description:
        "A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic, you can wear with anything. Complete your casual wardrobe with a splash of style with these 511 slim fit jeans from Levi's.",
      Fit_and_sizing: {
        length: 'extra durable',
        pocket: 'curved pocket',
        fit: 'Slim Fit From Hip To Ankle',
      },
      Composition: '48% Cotton 24% Polyester 26% Viscose 2% Elastane',
      Additional: {
        exposure: 'lightweight',
        marketedBy:
          'Marketed by: Levis Strauss (India) Pvt. Ltd. ITC Green Centre, 5th Floor - North Tower No 18, Banaswadi Main Road, Maruthi Seva Nagar, Bangalore - 560005',
      },
    },
    {
      id: '3new',
      name: 'Stuff for me',
      image: '../../assets/new/p3.jpg',
      price: 6000,
      sizes: {
        small: true,
        xl: false,
        xxl: true,
        xs: true,
        M: true,
      },
      colors: ['black', 'brown'],
      Description:
        "A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic, you can wear with anything. Complete your casual wardrobe with a splash of style with these 511 slim fit jeans from Levi's.",
      Fit_and_sizing: {
        length: 'extra durable',
        pocket: 'curved pocket',
        fit: 'Slim Fit From Hip To Ankle',
      },
      Composition: '48% Cotton 24% Polyester 26% Viscose 2% Elastane',
      Additional: {
        exposure: 'lightweight',
        marketedBy:
          'Marketed by: Levis Strauss (India) Pvt. Ltd. ITC Green Centre, 5th Floor - North Tower No 18, Banaswadi Main Road, Maruthi Seva Nagar, Bangalore - 560005',
      },
    },
    {
      id: '4new',
      name: 'Stuff for all',
      image: '../../assets/new/p4.jpg',
      price: 6000,
      sizes: {
        small: true,
        xl: false,
        xxl: true,
        xs: true,
        M: true,
      },
      colors: ['black'],
      Description:
        "A modern slim with room to move, the 511 Slim Fit Stretch Jeans are a classic, you can wear with anything. Complete your casual wardrobe with a splash of style with these 511 slim fit jeans from Levi's.",
      Fit_and_sizing: {
        length: 'extra durable',
        pocket: 'curved pocket',
        fit: 'Slim Fit From Hip To Ankle',
      },
      Composition: '48% Cotton 24% Polyester 26% Viscose 2% Elastane',
      Additional: {
        exposure: 'lightweight',
        marketedBy:
          'Marketed by: Levis Strauss (India) Pvt. Ltd. ITC Green Centre, 5th Floor - North Tower No 18, Banaswadi Main Road, Maruthi Seva Nagar, Bangalore - 560005',
      },
    },
  ];
}
