import React, { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80'
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8 text-white">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">
            Premium e-commerce experience
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Discover fashion, gadgets, and essentials in one smooth storefront.
            </h1>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              Smart Bazaar brings curated categories, clean browsing, and a simple checkout flow
              into a more polished and responsive shopping experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-600">
              Shop Collection
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              Explore Categories
            </button>
          </div>
          <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-3xl font-semibold">25k+</p>
              <p className="mt-1 text-sm text-slate-300">Monthly product views</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-3xl font-semibold">4.8/5</p>
              <p className="mt-1 text-sm text-slate-300">Customer satisfaction</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-3xl font-semibold">48h</p>
              <p className="mt-1 text-sm text-slate-300">Fast shipping promise</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-emerald-400/30 via-cyan-400/20 to-violet-500/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <button
              className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/55 p-3 text-white transition hover:bg-black/80"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              &#10094;
            </button>

            <div className="h-[22rem] overflow-hidden rounded-[1.5rem] sm:h-[28rem]">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <button
              className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/55 p-3 text-white transition hover:bg-black/80"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              &#10095;
            </button>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Trending right now</p>
                <p className="mt-1 text-xl font-semibold text-white">Elevated shopping, curated for every style</p>
              </div>
              <div className="flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
