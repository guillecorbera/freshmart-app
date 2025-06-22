// src/components/Testimonials.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Importa los estilos necesarios
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah K.',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/customer-1.jpg', 
      quote: 'Trabajo rápido y eficiente, estamos encantados con el resultado.',
      rating: '★★★★★'
    },
    {
      id: 2,
      name: 'Michael P.',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/customer-2.jpg', 
      quote: 'Nos ofrecieron el mejor servicio que se pueda obtener. Con gusto volveremos a contratarlos',
      rating: '★★★★☆'
    },
    {
      id: 3,
      name: 'Emily R.',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/customer-3.png', 
      quote: 'Excelente servicio al cliente. Altamente recommendado!',
      rating: '★★★★★'
    },
    {
      id: 4,
      name: 'John C.',
      image: 'https://raw.githubusercontent.com/farazc60/Project-Images/refs/heads/main/grocery-website/customer-4.png', 
      quote: 'La calidad del servicio es impecable, los materiales utilizados de primera, estamos encantados!',
      rating: '★★★★★'
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Lo que dicen nuestros clientes</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-4">
                <div className="bg-white rounded-lg shadow p-6 text-center max-w-lg mx-auto">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-emerald-200"
                  />
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                  <div className="text-yellow-400 mt-2">{testimonial.rating}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}