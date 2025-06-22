// src/components/PopularProducts.jsx
import { useEffect } from 'react';
import Swiper from 'react-id-swiper';
import ProductCard from './ProductCard';

const products = [
  {
    id: 'apple-organic',
    name: 'Organic Apples',
    price: 3.99,
    image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/organic-apples.png' 
  },
  {
    id: 'milk-gallon',
    name: 'Fresh Milk (1 Gallon)',
    price: 4.50,
    image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/fresh-milk.png' 
  },
  {
    id: 'bread-wheat',
    name: 'Whole Wheat Bread',
    price: 2.99,
    image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/whole-wheat-bread.png' 
  },
  {
    id: 'avocado-each',
    name: 'Ripe Avocados (Each)',
    price: 1.50,
    image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/ripe-avocados.png' 
  },
  {
    id: 'fresh-orange-juice',
    name: 'Fresh Orange Juice',
    price: 3.50,
    image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/fresh-orange-juice.jpg' 
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    price: 1.38,
    image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/broccoli.jpg' 
  },
  {
    id: 'fresh-cucumbers',
    name: 'Fresh Cucumbers',
    price: 6.70,
    image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/cucumbers.jpg' 
  },
  {
    id: 'banana',
    name: 'Banana',
    price: 1.68,
    image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/banana.jpg' 
  },
  {
    id: 'watermelon',
    name: 'Watermelon',
    price: 0.55,
    image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/fresh-watermelon.png' 
  }
];

export default function PopularProducts() {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
      el: '.product-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.product-next',
      prevEl: '.product-prev'
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }
  };

  return (
    <section id="popular-products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Popular Picks</h2>
        <div className="relative">
          <Swiper {...params}>
            {products.map((product) => (
              <div key={product.id} className="p-1 h-auto">
                <ProductCard product={product} />
              </div>
            ))}
          </Swiper>
          <div className="swiper-pagination product-pagination relative mt-4"></div>
          <div className="swiper-button-next product-next"></div>
          <div className="swiper-button-prev product-prev"></div>
        </div>
      </div>
    </section>
  );
}