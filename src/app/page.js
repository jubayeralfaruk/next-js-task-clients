'use client'; 

import Categories from "@/components/Categories";
import Reviews from "@/components/Reviews";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Newsletter from "@/components/Newsletter";
import Brands from "@/components/Brands";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="mx-3">
      <Hero />
      <Categories />
      <NewProducts />
      <Reviews />
      <Brands />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
