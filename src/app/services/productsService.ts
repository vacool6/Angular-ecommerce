import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  top = [
    {
      name: "Men's 501 Black Regular Fit Jeans",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPY92jc5jl2HxRMokg6IKWC5hfJzIzOsGUA&usqp=CAU',
    },
    {
      name: "Men's 509 Jeans",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9A1GY7FoVhPpYqK94P25w7NL-m3ZpcuHmNg&usqp=CAU',
    },
    {
      name: "Men's 300  T-shirt",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50Gfzlpug7ztkhE-ZSOBAvZW0RqJCHKHOCA&usqp=CAU',
    },
    {
      name: "Men's essentials",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84zHR6T4QQ0nmwxeb4htNKymJSRQ2mR-Sow&usqp=CAU',
    },
  ];

  newReleases = [
    {
      name: "Men's stuff",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyX0OD-MP4k9QuLs5JvZGZBi4K-Y_6HHLqLw&usqp=CAU',
    },
    {
      name: "Women's stuff",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eiQYnhVBtduNwfDF0Y0s4z75hHiKpT9Lsg&usqp=CAU',
    },
    {
      name: 'Stuff for me',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhwKxBXWcxDT3OmC5L6ErNH9uaR41lNq69eA2PypI57rt95SCxR5DMqcm3thfQ6yFbD0&usqp=CAU',
    },
    {
      name: 'Stuff for all',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCCMfmDqKRWdf3qzCXsram5xw-3YnW9TJyITH9J_LNFpBUltOGx1zj5Co1RrLl_wxDa8&usqp=CAU',
    },
  ];
}
