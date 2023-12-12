import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  top = [
    {
      id: '1top',
      name: "Men's 501 Black Regular Fit Jeans",
      image: '../../assets/top/p1.jpg',
    },
    {
      id: '2top',
      name: "Men's 509 Jeans",
      image: '../../assets/top/p2.jpg',
    },
    {
      id: '3top',
      name: "Men's 300  T-shirt",
      image: '../../assets/top/p3.jpg',
    },
    {
      id: '4top',
      name: "Men's essentials",
      image: '../../assets/top/p4.jpg',
    },
  ];

  newReleases = [
    {
      id: '1new',
      name: "Men's stuff",
      image: '../../assets/new/p1.jpg',
    },
    {
      id: '2new',
      name: "Women's stuff",
      image: '../../assets/new/p2.jpg',
    },
    {
      id: '3new',
      name: 'Stuff for me',
      image: '../../assets/new/p3.jpg',
    },
    {
      id: '4new',
      name: 'Stuff for all',
      image: '../../assets/new/p4.jpg',
    },
  ];
}
